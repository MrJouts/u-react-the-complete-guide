import CartContext from "./cart-context";

type Item = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type Props = {
  children: any;
};

const CartProvider = ({ children }: Props) => {
  const addItemHandler = (item: Item) => {};

  const removeItemHandler = (id: string) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
