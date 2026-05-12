import mongoose from "mongoose";
import config from "./index.js";

const connectDb = async () => {
  try {
    await mongoose.connect(config.mongoDbUrl);
    console.log("Mongodb is connected successfully");
  } catch (error) {
    console.error(`mongodb connection failed ${error.message}`);
    process.exit(1);
  }
};

// gracefull shutdown

process.on("SIGINT", async () => {
    await mongoose.connection.close()
    console.log("Mongo db connection closed")
    process.exit(0)
})

export default connectDb
