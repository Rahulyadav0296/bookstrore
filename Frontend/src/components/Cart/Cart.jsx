import React, { useContext, useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import "./Cart.css";
import CartItem from "./CartItem";
import TextFlowComponent from "./TextFlowComponent";

function Cart() {
  const { updatedCart, totalPrice, setTotalPrice, setCart, setUpdatedCart } =
    useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [deliver, setDeliver] = useState(true);

  const handleBuy = () => {
    setMessage("Congratulations, Your Item will be delivered Soon!");
    setCart(0);
    setUpdatedCart([]);
    setTotalPrice(0);
    setDeliver(false);
  };

  return (
    <div className="cart-container">
      {updatedCart.length === 0 && deliver ? (
        <p>The Cart is Empty!</p>
      ) : (
        <>
          {deliver &&
            updatedCart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          {deliver && totalPrice > 0 ? (
            <>
              <p className="total-price">Total Price: ${totalPrice}</p>
              <button className="buy-button" onClick={handleBuy}>
                Buy Now
              </button>
            </>
          ) : (
            <TextFlowComponent message={message} />
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
