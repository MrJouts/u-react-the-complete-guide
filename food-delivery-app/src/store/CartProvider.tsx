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
  item: Item;
};

type State = {
  items: Item[];
  totalAmount: number;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: State = defaultCartState, action: Action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }: any) => {
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