import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1', image: 'path_to_image1.jpg' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2', image: 'path_to_image2.jpg' },
  { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3', image: 'path_to_image3.jpg' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product, quantity: 1 });
  };

  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
