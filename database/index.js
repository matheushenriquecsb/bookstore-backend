import mongoose from "mongoose";
 
const connectDb = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, () => { 
    console.log("Connected to MongoDB");
  });
};

export default connectDb;
