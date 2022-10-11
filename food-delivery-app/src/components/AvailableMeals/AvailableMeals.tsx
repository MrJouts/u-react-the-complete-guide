import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableMeals = () => {
  return (
    <div className={classes.meals}>
      AvailableMeals
      <MealItem />
    </div>
  );
};

export default AvailableMeals;
