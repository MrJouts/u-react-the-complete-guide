import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import { meal } from "../../types";

type Props = {
  meal: meal;
  addMealToCart: Function;
};

const MealItem = ({ meal, addMealToCart }: Props) => {
  const { name, price, description } = meal;
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <MealItemForm
        id={meal.id}
        addMealAmount={(amount: number) => addMealToCart(amount, name, price)}
      />
    </li>
  );
};

export default MealItem;
