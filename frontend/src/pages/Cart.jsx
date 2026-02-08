import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-name">{item.name}</div>

          <div className="cart-item-details">
            Price: ₹ {item.price}
          </div>

          <div className="cart-item-details">
            Quantity: {item.quantity}
          </div>

          <div className="cart-actions">
            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
              disabled={item.quantity === 1}
            >
              −
            </button>

            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
            >
              +
            </button>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
