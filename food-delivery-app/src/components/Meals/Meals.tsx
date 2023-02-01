import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { meal } from "../../types";

import classes from "./Meals.module.scss";

type Props = {
  meals: meal[];
  addMealToCart: () => void;
  isLoading: Boolean;
};

const Meals = ({ meals, addMealToCart, isLoading }: Props) => {
  return (
    <>
      <MealsSummary />
      {isLoading && <p className={classes.loading}>Loading meals...</p>}

      <AvailableMeals meals={meals} addMealToCart={addMealToCart} />
    </>
  );
};

export default Meals;
