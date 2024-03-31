import mongoose from "mongoose";
import { MONGO_URI } from "./index.js";

export const connectDb = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName:"blackcoffer"
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
};
