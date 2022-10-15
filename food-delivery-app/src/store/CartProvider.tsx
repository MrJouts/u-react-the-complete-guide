import { useReducer } from "react";
import { CartItem } from "../types";
import CartContext from "./cart-context";

type ContextProps = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

type Action =
  | {
      type: "ADD";
      item: CartItem;
    }
  | {
      type: "REMOVE";
      id: string;
    };

type State = {
  items: CartItem[];
  totalAmount: number;
};

const defaultCartState: State = {
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

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }: any) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

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
