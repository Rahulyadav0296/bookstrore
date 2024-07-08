import React from "react";

function BooksDetails({ book, handleCart }) {
  return (
    <div className="book-item">
      <img className="book-image" src={book.image} alt={book.title} />
      <p className="book-title">{book.title}</p>
      <p className="book-author">
        <em>by: {book.author}</em>
      </p>
      <p className="book-genre">{book.genre}</p>
      {/* <p className="book-description">{book.description}</p> */}
      <p className="book-price">
        <strong>$:</strong> {book.price}
      </p>
      <button className="add-to-cart-button" onClick={handleCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default BooksDetails;
