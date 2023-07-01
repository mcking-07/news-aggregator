const mongoose = require('mongoose');

const scienceSchema = new mongoose.Schema({
  source: { type: String, required: true },
  author: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  url: { type: String, required: true },
  urlToImage: { type: String, default: '' },
  publishedAt: { type: Date, required: true },
  content: { type: String, default: ''  }
}, {
  collection: 'science'
});

const scienceArticles = mongoose.model('Science', scienceSchema);

module.exports = scienceArticles;
