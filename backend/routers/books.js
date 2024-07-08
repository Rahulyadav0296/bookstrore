const express = require("express");
const booksController = require("../controllers/books");
const router = express.Router();

router.get("/books", booksController.getBooks);
router.post("/books", booksController.postBooks);
// router.get("/books/:id", booksController.getCart);
// router.post("/books/:id", booksController.postCart);

module.exports = router;
