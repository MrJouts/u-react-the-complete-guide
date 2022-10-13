import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import { meal } from "../../types";

type Props = {
  meal: meal;
  addMealToCart: Function;
};

const MealItem = ({ meal, addMealToCart }: Props) => {
  const { name, description } = meal;
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm
        id={meal.id}
        addMealAmount={(amount: number) => addMealToCart(amount, name, price)}
      />
    </li>
  );
};

export default MealItem;
