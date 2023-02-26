import Book from "../models/bookModel.js";

export const addBooks = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

export const getBooks = async (req, res, nex) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

export const getBookById = async (req, res) => {
  const id = req.params.id;
  let books;

  if (!books) {
    return res.status(404).send({ msg: "Book not found!" });
  }

  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }

  return res.status(201).send({ book });
};

export const updateBooks = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available } = req.body;
  let books;

  if (!books) {
    return res.status(404).send({ msg: "Book not found!" });
  }

  try {
    books = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });

    book = await books.save();
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooks = async (req, res) => {
  const id = req.params.id;
  let books;

  if (!books) {
    return res.status(404).send({ msg: "Book not found!" });
  }

  try {
    book = await Book.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  return res.status(201).send({ msg: "Book deleted!" });
};
