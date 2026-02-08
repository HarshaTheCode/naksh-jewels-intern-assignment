import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/Cartcontext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } =
    useContext(CartContext);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSaveCart = () => {
    setSaving(true);
    setMessage("");

    // Prepare data for backend
    const items = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity
    }));

    axios
      .post("http://localhost:3000/cart", { items })
      .then(() => {
        setMessage("Cart saved successfully ");
      })
      .catch(() => {
        setMessage("Failed to save cart ");
      })
      .finally(() => {
        setSaving(false);
      });
  };

  if (cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      <Link to="/" className="go-to-productlist">
        Go to Product list
      </Link>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />

          <div className="cart-item-name">{item.name}</div>

          <div className="cart-item-price">
            Price: ₹ {item.price}
          </div>

          <div className="cart-item-quantity">
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

      {/* Save Cart Button */}
      <button
        onClick={handleSaveCart}
        disabled={saving}
        className="save-cart-btn"
      >
        {saving ? "Saving..." : "Save Cart"}
      </button>

      {/* Success / Error Message */}
      {message && <p className="cart-message">{message}</p>}
    </div>
  );
};

export default Cart;
