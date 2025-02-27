import React from 'react';
import './BurgerIngredient.css';

const BurgerIngredient = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
    case 'salad':
      ingredient = <div className="Salad"></div>;
      break;
    case 'sauce':
      ingredient = <div className="Sauce"></div>;
      break;
    case 'cheese':
      ingredient = <div className="Cheese"></div>;
      break;
    case 'meat':
      ingredient = <div className="Meat"></div>;
      break;
    case "bread-bottom":
      ingredient = <div className="BreadBottom"></div>;
      break;
    default:
      ingredient = null;

  }

  return ingredient;
};

export default BurgerIngredient;
