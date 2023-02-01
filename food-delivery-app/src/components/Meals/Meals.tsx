import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { meal } from "../../types";

import classes from "./Meals.module.scss";

type Props = {
  meals: meal[];
  addMealToCart: () => void;
  isLoading: Boolean;
  error: String | null | undefined;
};

const Meals = ({ meals, addMealToCart, isLoading, error }: Props) => {
  return (
    <>
      <MealsSummary />
      {error && <p className={classes.loading}>{error}</p>}

      {isLoading && <p className={classes.loading}>Loading meals...</p>}

      {meals.length > 0 && (
        <AvailableMeals meals={meals} addMealToCart={addMealToCart} />
      )}
    </>
  );
};

export default Meals;
