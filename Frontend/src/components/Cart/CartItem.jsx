import React from "react";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title">{item.title}</h2>
        <p className="cart-item-author">Author: {item.author}</p>
        <p className="cart-item-price">Price: ${item.price}</p>
        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
        <p className="cart-item-genre">Genre: {item.genre}</p>
      </div>
    </div>
  );
}

export default CartItem;
