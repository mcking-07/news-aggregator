const mongoose = require('mongoose');

const businessArticles = require('../models/business');
const entertainmentArticles = require('../models/entertainment');
const generalArticles = require('../models/general');
const healthArticles = require('../models/health');
const scienceArticles = require('../models/science');
const sportsArticles = require('../models/sports');
const technologyArticles = require('../models/technology');

const config = require('../config/config');
const { logger } = require('../utils/logger');

const MAX_ALLOWED_DATE = '2023-06-30T00:00:00.000+00:00';

collectionCleaner = async () => {
  const collections = [businessArticles, entertainmentArticles, generalArticles, healthArticles, scienceArticles, sportsArticles, technologyArticles];

  try {
    for (const collection of collections) {
      const pipeline = {
        $or: [
          { publishedAt: { $lt: new Date(MAX_ALLOWED_DATE) } },
          { urlToImage: { $exists: false } }, { urlToImage: null }, { urlToImage: '' },
          { author: { $exists: false } }, { author: null }, { author: '' },
          { description: { $exists: false } }, { description: null }, { description: '' },
          { content: { $exists: false } }, { content: null }, { content: '' }
        ]
      };

      const removed = await collection.deleteMany(pipeline);
      logger.info(`Removed [${removed.deletedCount}] documents from [${collection.collection.name}]`);
    }
  } catch (error) {
    logger.error(`Error during collection cleanup: ${error}`)
  }
}

mongoose.set('strictQuery', false);

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(config.mongoUri, mongooseOptions)
.then(async () => {
  logger.info('Connected to MongoDB');
  await collectionCleaner();
  mongoose.disconnect();
})
.catch(error => logger.error(`Error connecting to MongoDB: ${error}`));
