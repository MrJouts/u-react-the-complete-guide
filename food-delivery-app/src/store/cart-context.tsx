import { createContext } from "react";

type Item = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type Props = {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const CartContext = createContext<Props>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeAll: () => {},
});

export default CartContext;
