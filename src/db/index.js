import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/ ${DB_NAME}`
    );
    console.log(
      `\n MongoDB connect !! DB HOST: ${connectionDB.connection.host}`
    );
  } catch (error) {
    console.error("ERROR in Connection:", error);
    process.exit(1);
  }
};
export default connectDB;
