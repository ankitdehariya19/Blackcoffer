import { Schema, model } from "mongoose";

const InsightSchema =new  Schema({
  end_year: String,
  intensity: {
    type: Number
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
    type: Number
  },
  pestle: String,
  source: String,
  title: {
    type: String,
  },
  likelihood: {
    type: Number
  },
});

export default model("Insight", InsightSchema);
