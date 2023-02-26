import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected to MongoDB");
  });
};

export default connectDb;
