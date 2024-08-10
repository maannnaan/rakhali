import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';  // Import the CSS file

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            <h2>রাখালী<sub>.farm</sub></h2>
            {cart.map((item, index) => (
              <li key={item.id} className="cart-item">
                <span className="item-index">{index + 1}.</span>
                <span className="item-name">{item.name}</span> - 
                <span className="item-price">৳{item.price}</span> x 
                <span className="item-quantity">{item.quantity}</span> = 
                <span className="item-total">৳{item.quantity * item.price}</span>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ৳ {getTotalPrice().toFixed(2)}</p>
          <button className="clear-button" onClick={clearCart}>Clear Cart</button>
          <Link className="checkout-link" to="/checkout">Go to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
