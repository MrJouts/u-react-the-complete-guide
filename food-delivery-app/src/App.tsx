import { useState } from "react";

import { CartItem, meal } from "./types";
import { DUMMY_MEALS } from "./mocks/meals";

import AvailableMeals from "./components/AvailableMeals/AvailableMeals";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [meals, setMeals] = useState<meal[]>(DUMMY_MEALS);
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addMealToCart = (amount: number, name: string, price: number) => {
    const newCartItem: CartItem = {
      name,
      amount,
      price: price,
    };

    setCartItems((prevItems) =>
      prevItems ? [newCartItem, ...prevItems] : [newCartItem]
    );

    console.log("cartItem", newCartItem);
  };

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && <Modal onClick={closeModal} />}
      <Header cartItems={cartItems} openModal={openModal} />
      <MealsSummary />
      <AvailableMeals meals={meals} addMealToCart={addMealToCart} />
    </>
  );
}

export default App;
