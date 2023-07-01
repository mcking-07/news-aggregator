const axios = require('axios');
const cron = require('node-cron');
const config = require('../config/config');
const Business = require('../models/business');
const Entertainment = require('../models/entertainment');
const General = require('../models/general');
const Health = require('../models/health');
const Science = require('../models/science');
const Sports = require('../models/sports');
const Technology = require('../models/technology');
const { logger } = require('./logger');

const buildUrl = (category) => {
  const { apiKey, newsApiUrl, pageSize, language } = config;
  const params = new URLSearchParams();
  params.append('category', category.toLowerCase());
  params.append('language', language);
  params.append('pageSize', pageSize);
  params.append('apiKey', apiKey);
  return `${newsApiUrl}?${params.toString()}`;
};

const categories = [Business, Entertainment, General, Health, Science, Sports, Technology];

const fetchArticles = async (model) => {
  const category = model.collection.collectionName;
  try {
    const url = buildUrl(category);
    const response = await axios.get(url);
    const articles = response.data.articles.map((article) => {
      const source = article.source.name;
      const { author, title, description, url, urlToImage, publishedAt, content } = article;
      return {
        source, author, title, description, url, urlToImage, publishedAt, content,
      };
    });
    const existingArticles = await model.find({ url: { $in: articles.map((article) => article.url) } });
    const existingUrls = existingArticles.map((article) => article.url);
    const newArticles = articles.filter((article) => !existingUrls.includes(article.url));
    if (newArticles.length) {
      const articlesToInsert = await model.insertMany(newArticles);
      logger.info(`Inserted ${articlesToInsert.length} articles for ${category}`);
    } else {
      logger.info(`No new articles for ${category}`);
    }
  } catch (error) {
    logger.error(`Error fetching articles for ${category}:`, error);
  }
};

const start = async () => {
  cron.schedule(`*/${parseInt(config.updateFrequency.minute)} */${parseInt(config.updateFrequency.hour)} * * *`, async () => {
    for (const category of categories) {
      logger.info(`Updating Database for ${category.collection.collectionName}`);
      await fetchArticles(category);
    }
  });
};

module.exports = { start };
