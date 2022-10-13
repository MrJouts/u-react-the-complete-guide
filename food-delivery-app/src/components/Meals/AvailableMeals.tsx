import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.scss";
import { meal } from "../../types";
import Card from "../UI/Card";

type Props = {
  meals: meal[];
  addMealToCart: Function;
};

const AvailableMeals = ({ meals, addMealToCart }: Props) => {
  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} meal={meal} addMealToCart={addMealToCart} />
  ));

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
