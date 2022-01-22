import mongoose from "mongoose";
import config from "config";

const mongoURI = config.get("mongoURI") as string;

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected!!!");
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
}
