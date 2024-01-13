import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully Connected to MongoDB`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongodb connection Failed ${error}`.bgRed.white);
  }
};
export default connectDB;
