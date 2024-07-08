import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Books.css";
import Input from "./Input";

// const data = ["Title", "Auther", "Genre", "Description", "Price", "Image"];

function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState({
    title: "",
    auther: "",
    genre: "",
    description: "",
    price: 0,
    quantity: 1,
    image: "",
  });

  // for handling the text
  const handleBooks = (e) => {
    const { name, value } = e.target;
    setBooks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: books.title,
          auther: books.auther,
          description: books.description,
          genre: books.genre,
          price: books.price,
          quantity: books.quantity,
          image: books.image,
        }),
      });
      const data = await responce.json();
      console.log(data);
      setBooks("");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bookstore">
      <Input
        value={books.title}
        name="title"
        label="Title"
        handleBooks={handleBooks}
      />
      <Input
        value={books.auther}
        name="auther"
        label="Auther"
        handleBooks={handleBooks}
      />
      <Input
        value={books.genre}
        name="genre"
        label="Genre"
        handleBooks={handleBooks}
      />
      <Input
        value={books.description}
        name="description"
        label="Description"
        handleBooks={handleBooks}
      />
      <Input
        value={books.price}
        name="price"
        label="Price"
        handleBooks={handleBooks}
      />
      <Input
        value={books.image}
        name="image"
        label="Image URL"
        handleBooks={handleBooks}
      />

      <button onClick={handleClick} className="add-book-btn">
        Add a Book
      </button>
    </div>
  );
}

export default Books;
