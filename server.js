import express from "express";
import connectDb from "./database/index.js";
import bookRouter from "./routes/bookRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/books", bookRouter);


app.listen(process.env.PORT, () => {
  console.log("Server is running!");
  connectDb();
});
