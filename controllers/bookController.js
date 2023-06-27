import Book from "../models/bookModel.js";

export const addBooks = async (req, res, next) => {
  const { name, author, description, price, available} = req.body;
  try {
    const book = new Book({
      name,
      author,
      description,
      price,
      available
    });
    await book.save();
    return res.status(201).json({ book }); 
  } catch (err) {
    console.log(err);
  }

  
};

export const getBooks = async (req, res) => { 
  try {
    const books = await Book.find();
    return res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  } 
};

export const getBookById = async (req, res) => {
 
  const bookId = req.params.id; 

  if (!bookId) {
    return res.status(404).send({ msg: "Book not found!" });
  }

  try {
    const book = await Book.findById(bookId);
    return res.status(200).send({ book });
  } catch (error) {
    console.log(error);
  } 
};

export const updateBooks = async (req, res) => {
  const bookId = req.params.id;
  const { name, author, description, price, available } = req.body; 

  if (!bookId) {
    return res.status(404).send({ msg: "Book not found!" });
  }

  try {
    const book = await Book.findOneAndUpdate(bookId, {
      name,
      author,
      description,
      price,
      available,
    });

    const updatedBook = await book.save();
    return res.status(200).send({ updatedBook });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooks = async (req, res) => {
  const bookId = req.params.id; 

  if (!bookId) {
    return res.status(404).send({ msg: "Book not found!" });
  }

  try {
    const book = await Book.findByIdAndDelete(bookId);
    return res.status(200).send({msg: "Book Deleted!" }, book);
  } catch (error) {
    console.log(error);
  }
};
