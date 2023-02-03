import { useEffect, useState } from "react";

import { CartItem, meal } from "./types";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [meals, setMeals] = useState<meal[]>([]);
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null | undefined>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://food-app-5531c-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const responseData = await response.json();

        const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setMeals(loadedMeals);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        setError(message);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const showCart = () => setCartIsShown(true);

  const hideCart = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <Meals meals={meals} isLoading={isLoading} error={error} />
    </CartProvider>
  );
}

export default App;
