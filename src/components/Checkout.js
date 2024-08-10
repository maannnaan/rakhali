import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

import './Checkout.css';

const districts = [
  'District 1',
  'District 2',
  'District 3',
  'District 4',
  'District 5',
];

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    district: '',
    address: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { dispatch } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_CART' });
    // Handle form submission
    console.log('Form Data:', formData);
    // Here you might want to send this data to a server or process it
    setIsSubmitted(true);
  };

  return (
    <div className="checkout-page">
      {isSubmitted ? (
        <div className="confirmation-message">
          <h2>Thank you for your purchase!</h2>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Checkout</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mobile No:
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            District:
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
