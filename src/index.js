import mongoose from "mongoose";
import { DB_NAME } from "./constants";







/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();

*/