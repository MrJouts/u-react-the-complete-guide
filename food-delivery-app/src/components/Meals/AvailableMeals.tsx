import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.scss";
import { meal } from "../../types";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState<meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null | undefined>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://food-app-5531c-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const responseData = await response.json();

        const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setMeals(loadedMeals);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        setError(message);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading meals...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
