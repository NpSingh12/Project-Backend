//require('dotenv').config()
// import syntax to dotenv
import dotenv, { config } from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("error Bagjao:", err);
  });

/*
import express from "express";
const app = express()(
  //iife function
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", () => {
        console.log("error");
        throw error;
      });
      app.listen(process.env.PORT, () => {
        console.log(`App is listen on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR:", error);
      throw err;
    }
  }
)();*/
