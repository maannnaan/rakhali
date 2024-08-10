import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartIcon from "../lovecart.svg";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav>
      <h1>
        রাখালী<sub>.farm</sub>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
      <div className="cart-icon">
        
        <h2 className="circle-number">{cart.length}</h2>
        <Link to="/cart">
          <img src={CartIcon} alt="Cart" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
