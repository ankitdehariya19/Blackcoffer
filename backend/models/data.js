const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: {
    type: Number,
    required: true,
  },
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: {
    type: Number,
    required: true,
  },
  pestle: String,
  source: String,
  title: {
    type: String,
    required: true,
  },
  likelihood: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
