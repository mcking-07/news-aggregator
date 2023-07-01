const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const cron = require('./utils/cron');
const config = require('./config/config');
const { logger } = require('./utils/logger');

require('dotenv').config();

const app = express();
const PORT = config.port || 4000;

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(config.mongoUri, mongooseOptions).then(() => logger.info('Connected to MongoDB')).catch(error => logger.error(`Error connecting to MongoDB: ${error}`));

app.use('/news', routes);
cron.start();

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}!`);
});
