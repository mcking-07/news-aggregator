const express = require('express');
const Technology = require('../../models/technology');
const config = require('../../config/config');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pageSize = config.pageSize;
    const articles = await Technology.find({ 'source': { $ne: null } }).sort({ publishedAt: 'desc' }).limit(pageSize).lean();
    if (articles.length) {
      res.status(200).json(articles);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

module.exports = router;
