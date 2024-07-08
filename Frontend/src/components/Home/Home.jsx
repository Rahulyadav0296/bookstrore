import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import BooksDetails from "./BooksDetails";
import FilterByPrice from "./FilterByPrice";
import FilterByType from "./FilterByType";
import "./Home.css";
function Home() {
  const [booksDetails, setBooksDetails] = useState([]);
  const { setTotalPrice, setCart, setUpdatedCart } = useContext(AuthContext);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 3000,
  });
  const [filterType, setFilterType] = useState("title");

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooksDetails(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleCart = (index) => {
    const selectedBook = booksDetails[index];

    //updating the total items in cart and total price
    setCart((prev) => prev + 1);
    setTotalPrice((prev) => prev + selectedBook.price);
    console.log(selectedBook._id);
    setUpdatedCart((prevCart) => {
      // Check if the book already exists in the cart
      const existingBookIndex = prevCart.findIndex(
        (item) => item._id === selectedBook._id
      );
      console.log(existingBookIndex);

      if (existingBookIndex !== -1) {
        // If it exists, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingBookIndex] = {
          ...updatedCart[existingBookIndex],
          quantity: updatedCart[existingBookIndex].quantity + 1,
        };
        console.log("Updated Cart with Incremented Quantity:", updatedCart);
        return updatedCart;
      } else {
        // If it doesn't exist, add it with a quantity of 1
        return [...prevCart, { ...selectedBook, quantity: 1 }];
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceRange = () => {
    const minPrice =
      priceRange.min !== null && priceRange.min !== undefined
        ? priceRange.min
        : 0;
    const maxPrice =
      priceRange.max !== null && priceRange.max !== undefined
        ? priceRange.max
        : Infinity;

    const newPriceList = booksDetails.filter((book) => {
      return book.price >= minPrice && book.price <= maxPrice;
    });
    console.log(newPriceList);
    setBooksDetails(newPriceList);
  };

  const handleFilterByType = () => {
    const sortedBooks = [...booksDetails];
    if (filterType === "title") {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterType === "genre") {
      sortedBooks.sort((a, b) => {
        a.genre.localeCompare(b.genre);
      });
    } else if (filterType === "price") {
      sortedBooks.sort((a, b) => a.price - b.price);
    }
    console.log(filterType);
    console.log(sortedBooks);
    setBooksDetails(sortedBooks);
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="filter-container">
        <FilterByPrice
          priceRange={priceRange}
          handleChange={handleChange}
          handlePriceRange={handlePriceRange}
        />
        <FilterByType
          filterType={filterType}
          handleFilterByType={handleFilterByType}
          handleFilterTypeChange={handleFilterTypeChange}
        />
      </div>
      <div className="book-container">
        {booksDetails.map((book, index) => (
          <BooksDetails
            key={index}
            book={book}
            handleCart={() => handleCart(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
