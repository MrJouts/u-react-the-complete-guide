import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";
import { meal } from "../../types";
import Card from "../UI/Card/Card";

type Props = {
  meals: meal[];
};

const AvailableMeals = ({ meals }: Props) => {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
