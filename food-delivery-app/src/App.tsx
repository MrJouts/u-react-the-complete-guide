import { useEffect, useState } from "react";

import { CartItem, meal } from "./types";
import { DUMMY_MEALS } from "./mocks/meals";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [meals, setMeals] = useState<meal[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-5531c-default-rtdb.firebaseio.com/meals.json"
      );
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
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

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

  const showCart = () => setCartIsShown(true);

  const hideCart = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} cartItems={cartItems} />}
      <Header cartItems={cartItems} onShowCart={showCart} />
      <Meals
        meals={meals}
        addMealToCart={addMealToCart}
        isLoading={isLoading}
      />
    </CartProvider>
  );
}

export default App;
