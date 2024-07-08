const Books = require("../models/books");

const getBooks = async (req, res) => {
  try {
    //fetch all the books from the database
    const books = await Books.find();

    // send the entire books array as JSON responce
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

const postBooks = async (req, res) => {
  try {
    const { title, auther, genre, description, price, quantity, image } =
      req.body;
    const books = new Books({
      title: title,
      auther: auther,
      genre: genre,
      description: description,
      price: price,
      quantity: quantity,
      image: image,
    });
    console.log(books);
    await books.save();
    res.status(200).json({ message: "Books Added to watchlist Successfull!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

// const getCart = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const book = await Books.findById(id);
//     if (book) {
//       res.status(200).json(book);
//     } else {
//       res.status(404).status({ message: "Book not found!" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error!" });
//   }
// };

// const postCart = async (req, res) => {};

module.exports = { getBooks, postBooks };
