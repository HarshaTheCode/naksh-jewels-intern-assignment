import { useEffect, useState } from "react"
import axios from "axios";
import ProductCard from "../components/Productcard";
import { Link } from "react-router-dom";

import "./Productlist.css"


const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data.data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <div className="top-section">
          <h2>Product List</h2>
          <Link className="CartButton" to="/cart">Go to Cart</Link>
        </ div>

        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Productlist
