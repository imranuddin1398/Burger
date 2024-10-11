import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Controls/Controls';
import OrderModal from '../../components/OrderModal/OrderModal'; // New component for the modal
import { database, ref, push } from '../../firebase';
import './BurgerBuilder.css';

const INGREDIENT_PRICES = {
  salad: 0.5,
  sauce: 0.7,
  cheese: 1.0,
  meat: 1.2,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    sauce: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(2);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const addIngredientHandler = type => {
    const newIngredients = { ...ingredients };
    newIngredients[type] += 1;
    setIngredients(newIngredients);

    setTotalPrice(prevPrice => prevPrice + INGREDIENT_PRICES[type]);
  };


  const removeIngredientHandler = type => {
    const newIngredients = { ...ingredients };
    if (newIngredients[type] <= 0) return;
    newIngredients[type] -= 1;
    setIngredients(newIngredients);

    setTotalPrice(prevPrice => prevPrice - INGREDIENT_PRICES[type]);
  };

  const resetOrderHandler = () => {
    setIngredients({
      salad: 0,
      sauce: 0,
      cheese: 0,
      meat: 0,
    });
    setTotalPrice(2); // Reset to base price
  };

  const completeOrderHandler = () => {
    setShowOrderModal(true);
  };

  const cancelOrderHandler = () => {
    setShowOrderModal(false);
  };

  const paymentHandler = () => {
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      date: new Date().toISOString(),
    };

    // Create a reference to the "orders" node in the database
    const ordersRef = ref(database, 'orders');

    // Save the order to the "orders" node in the Firebase database
    push(ordersRef, order)
      .then(() => {
        alert("Payment successful! Your order is on its way.");
        resetOrderHandler();
      })
      .catch(error => {
        console.error("Error saving order:", error);
      });
    alert("Payment successful! Your order is on its way.");
    setShowOrderModal(false);
    resetOrderHandler(); // Reset after payment
  };

  return (
    <div className='Burger-Builder'>
      <Controls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={Object.keys(ingredients).reduce((acc, key) => {
          acc[key] = ingredients[key] <= 0;
          return acc;
        }, {})}
        totalPrice={totalPrice}
        onOrderComplete={completeOrderHandler}
        onResetOrder={resetOrderHandler}
      />
      {showOrderModal && (
        <OrderModal
          ingredients={ingredients}
          totalPrice={totalPrice}
          onCancel={cancelOrderHandler}
          onPayment={paymentHandler}
        />
      )}

      <Burger ingredients={ingredients} />

    </div>
  );
};

export default BurgerBuilder;
