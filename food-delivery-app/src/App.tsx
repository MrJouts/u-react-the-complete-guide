import { useState } from "react";

import { CartItem, meal } from "./types";
import { DUMMY_MEALS } from "./mocks/meals";

import AvailableMeals from "./components/AvailableMeals/AvailableMeals";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import Modal from "./components/UI/Modal/Modal";
import Cart from "./components/Cart/Cart";

function App() {
  const [meals, setMeals] = useState<meal[]>(DUMMY_MEALS);
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addMealToCart = (amount: number, name: string, price: number) => {
    const newCartItem: CartItem = {
      name,
      amount: +amount,
      price: price,
    };

    let newItems: CartItem[] = [];

    if (cartItems === null) {
      newItems = [newCartItem];
    } else if (cartItems.find((cart) => cart.name == name)) {
      newItems = cartItems.map((cart) => {
        if (cart.name == name) {
          cart.amount += +amount;
        }
        return cart;
      });
    } else {
      newItems = cartItems.concat(newCartItem);
    }

    setCartItems((prevItems) => (prevItems = newItems));
  };

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <Modal onClick={closeModal}>
          <Cart onClick={closeModal} cartItems={cartItems} />
        </Modal>
      )}
      <Header cartItems={cartItems} openModal={openModal} />
      <MealsSummary />
      <AvailableMeals meals={meals} addMealToCart={addMealToCart} />
    </>
  );
}

export default App;
