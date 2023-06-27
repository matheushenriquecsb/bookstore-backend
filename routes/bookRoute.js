import express from "express";
import {
  addBooks,
  getBooks,
  updateBooks,
  deleteBooks,
  getBookById
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBooks);

router.get("/", getBooks);

router.get("/:id", getBookById);

router.put("/:id", updateBooks);

router.delete("/:id", deleteBooks);

export default router;
