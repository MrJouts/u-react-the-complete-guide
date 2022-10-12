import Home from "./pages/Home";
import { useState } from "react";

import { CartItem, meal } from "./types";
import { DUMMY_MEALS } from "./mocks/meals";

function App() {
  const [meals, setMeals] = useState<meal[]>(DUMMY_MEALS);
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);

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

  return (
    <>
      <Home meals={meals} addMealToCart={addMealToCart} />
    </>
  );
}

export default App;
