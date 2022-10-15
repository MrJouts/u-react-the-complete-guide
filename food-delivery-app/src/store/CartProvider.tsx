import { useReducer } from "react";
import CartContext from "./cart-context";

type Item = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type ContextProps = {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

type Action = {
  type: string;
  item: any;
};

type Props = {
  children: any;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = defaultCartState, action: Action) => {
  if (action.type === "ADD") {
    const { item } = action;
    const updatedItems = state.items.concat(item);
    const updatedTotalAmount = state.totalAmount + item.price * item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }: Props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item: Item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id: string) => {};

  const cartContext: ContextProps = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
