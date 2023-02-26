import express from "express";
import connectDb from "./database";

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is running!");
  connectDb();
});
