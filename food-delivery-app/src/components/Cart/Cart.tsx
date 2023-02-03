import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { CartItem as ICartItem } from "../../types";
import { formatPrice } from "../../utils/format-price";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

type Props = {
  onClose: () => void;
};

const Cart = ({ onClose }: Props) => {
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);

  const cartCtx = useContext(CartContext);
  const hasItems: boolean = cartCtx.totalAmount > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: ICartItem) =>
    cartCtx.addItem({ ...item, amount: 1 });

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-app-5531c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.removeAll();
  };

  const cartItems = cartCtx.items.map((cart) => (
    <CartItem
      key={cart.name}
      {...cart}
      onAdd={cartItemAddHandler.bind(null, cart)}
      onRemove={cartItemRemoveHandler.bind(null, cart.id)}
    />
  ));

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={() => cartCtx.removeAll()}
      >
        Clear cart
      </button>
      <button className={classes["button--alt"]} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={() => setIsCheckout(true)}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formatPrice(cartCtx.totalAmount)}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Submitting order....</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order....</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      <>
        {!isSubmitting && !didSubmit && modalContent}
        {isSubmitting && isSubmittingModalContent}
        {didSubmit && !isSubmitting && didSubmitModalContent}
      </>
    </Modal>
  );
};

export default Cart;
