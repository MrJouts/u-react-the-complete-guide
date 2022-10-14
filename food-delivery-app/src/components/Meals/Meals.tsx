import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { meal } from "../../types";

type Props = {
  meals: meal[];
  addMealToCart: () => void;
};

const Meals = ({ meals, addMealToCart }: Props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals meals={meals} addMealToCart={addMealToCart} />
    </>
  );
};

export default Meals;
