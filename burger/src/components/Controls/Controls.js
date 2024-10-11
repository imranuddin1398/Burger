import React from 'react';
import saladImg from '../../assets/salad.jpg';
import sauceImg from '../../assets/sauce.jpg';
import cheeseImg from '../../assets/cheese.jpg';
import meatImg from '../../assets/meat.jpg';
import './Controls.css';

const INGREDIENT_PRICES = {
  salad: 0.5,
  sauce: 0.7,
  cheese: 1.0,
  meat: 1.2,
};

const controls = [
  { label: 'Salad', type: 'salad', image: saladImg },
  { label: 'Sauce', type: 'sauce', image: sauceImg },
  { label: 'Cheese', type: 'cheese', image: cheeseImg },
  { label: 'Meat', type: 'meat', image: meatImg }
];

const Controls = ({ ingredientAdded, ingredientRemoved, disabled, totalPrice, onOrderComplete, onResetOrder }) => {
  return (
    <div className="Controls">
      <p>
        Current Price : <strong>${totalPrice.toFixed(2)}</strong>{" "}
      </p>
      {controls.map(ctrl => (
        <div className="Control" key={ctrl.type}>
          <img src={ctrl.image} alt={ctrl.label} className="ingredient-img" />
          <button className='button-y' onClick={() => ingredientRemoved(ctrl.type)} disabled={disabled[ctrl.type]}>-</button>
          <span>{ctrl.label} - ${INGREDIENT_PRICES[ctrl.type]}</span>
          <button className='button-b' onClick={() => ingredientAdded(ctrl.type)}>+</button>
        </div>
      ))}
      <button className="order-button" onClick={onOrderComplete}>Order Now</button>
      <button className="reset-button" onClick={onResetOrder}>Reset Order</button>
    </div>
  );
};

export default Controls;
