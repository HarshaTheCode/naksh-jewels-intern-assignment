import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    // Copy existing cart
    let updatedCart = [...cartItems];

    // Check if product already exists
    const index = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (index !== -1) {
      // Product exists → increase quantity
      updatedCart[index].quantity += 1;
    } else {
      // Product does not exist → add new item
      updatedCart.push({
        ...product,
        quantity: 1
      });
    }

    setCartItems(updatedCart);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );
    setCartItems(updatedCart);
  };

  // Update quantity of a product
  const updateQuantity = (id, quantity) => {
    let updatedCart = [...cartItems];

    const index = updatedCart.findIndex(
      (item) => item.id === id
    );

    if (index !== -1) {
      updatedCart[index].quantity = quantity;
      setCartItems(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
