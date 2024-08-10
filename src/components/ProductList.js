import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductList.css";

const products = [
  { id: 1, name: "Product 1", price: 10, image: "/Rakhali.jpg" },
  { id: 2, name: "Product 2", price: 20, image: "/Rakhali.jpg" },
  { id: 3, name: "Product 3", price: 30, image: "/Rakhali.jpg" },
  { id: 4, name: "Product 1", price: 10, image: "/Rakhali.jpg" },
  { id: 5, name: "Product 2", price: 20, image: "/Rakhali.jpg" },
  { id: 6, name: "Product 3", price: 30, image: "/Rakhali.jpg" },
  { id: 7, name: "Product 1", price: 10, image: "/Rakhali.jpg" },
  { id: 8, name: "Product 2", price: 20, image: "/Rakhali.jpg" },
  { id: 9, name: "Product 3", price: 30, image: "/Rakhali.jpg" },
  { id: 10, name: "Product 1", price: 10, image: "/Rakhali.jpg" },
  { id: 11, name: "Product 2", price: 20, image: "/Rakhali.jpg" },
  { id: 12, name: "Product 3", price: 30, image: "/Rakhali.jpg" },
  { id: 13, name: "Product 1", price: 10, image: "/Rakhali.jpg" },
  { id: 14, name: "Product 2", price: 20, image: "/Rakhali.jpg" },
  { id: 15, name: "Product 3", price: 30, image: "/Rakhali.jpg" },
  { id: 16, name: "Product 1", price: 10, image: "/Rakhali.jpg" },
  { id: 17, name: "Product 2", price: 20, image: "/Rakhali.jpg" },
  { id: 18, name: "Product 3", price: 30, image: "/Rakhali.jpg" },
];

const ProductList = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  const [animateBird, setAnimateBird] = useState(null);

  const openPopup = (productId) => {
    setActivePopup(productId);
  };

  const closePopup = () => {
    setActivePopup(null);
    setQuantity(1);
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product, quantity });
    setAnimateBird(product.id);
    setTimeout(() => setAnimateBird(null), 1000); // Reset animation after 1 second
    closePopup();
  };

  return (
    <div className="product-page">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-name">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </div>
            <div className="product-price">Price: ৳{product.price}</div>
            <button
              onClick={() => openPopup(product.id)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
            {activePopup === product.id && (
              <div className="popup-overlay">
                <div className="popup">
                  <h3>Add {product.name} to Cart</h3>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <button onClick={() => addToCart(product)}>Add</button>
                  <button onClick={closePopup}>Cancel</button>
                </div>
              </div>
            )}
            {animateBird === product.id && (
              <img src="/Icon.png" alt="bird" className="bird-animation" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
