import express from "express";
import {
  addBooks,
  getBooks,
  updateBooks,
  deleteBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBooks);

router.get("/", getBooks);

router.put("/", updateBooks);

router.delete("/", deleteBooks);

export default router;
