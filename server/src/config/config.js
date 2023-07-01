require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  pageSize: 100,
  language: 'en',
  newsApiUrl: 'https://newsapi.org/v2/top-headlines',
  apiKey: process.env.NEWS_API_KEY,
  updateFrequency: {
    hour: process.env.UPDATE_FREQUENCY_HOURS,
    minute: process.env.UPDATE_FREQUENCY_MINUTES
  }
};
