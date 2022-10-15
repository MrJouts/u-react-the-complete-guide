import { useContext } from "react";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import { meal } from "../../types";
import CartContext from "../../store/cart-context";
import { formatPrice } from "../../utils/format-price";

type Props = {
  meal: meal;
  addMealToCart: Function;
};

const MealItem = ({ meal }: Props) => {
  const { id, name, price, description } = meal;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formatPrice(price)}</div>
      </div>
      <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
