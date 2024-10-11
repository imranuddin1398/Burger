import React from 'react';
import './OrderModal.css';

const OrderModal = ({ ingredients, totalPrice, onCancel, onPayment }) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(ingredient => (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {ingredients[ingredient]}
      </li>
    ));

  return (
    <div className="OrderModal">
      <h3>Your Order Summary</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      
      <button className="payment-button" onClick={onPayment}>Proceed to Pay ${totalPrice.toFixed(2)}</button>
      <button className="cancel-button" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default OrderModal;
