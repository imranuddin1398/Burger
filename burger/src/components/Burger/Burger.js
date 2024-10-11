import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import './BurgerIngredient.css';

const Burger = ({ ingredients }) => {
  let ingredientComponents = Object.keys(ingredients).map((key) => {
    return [...Array(ingredients[key])].map((_, i) => (
      <BurgerIngredient key={key + i} type={key} />
    ));
  }).flat();

  if (ingredientComponents.length === 0) {
    ingredientComponents = <p>Please start adding ingredients!</p>;
  }

  return (<div className="Burger">
    <BurgerIngredient type="bread-top" />
    {ingredientComponents}
    <BurgerIngredient type="bread-bottom" />
  </div>
  );
};

export default Burger;
