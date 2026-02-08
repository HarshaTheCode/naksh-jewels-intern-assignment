import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";


import "./ProductCard.css";

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>

            <button onClick={() => addToCart(product)} >Add to Cart</button>
        </div>
    );
};

export default ProductCard;
