import AvailableMeals from "../components/AvailableMeals/AvailableMeals";
import Header from "../components/Header/Header";
import MealsSummary from "../components/MealsSummary/MealsSummary";
import Card from "../components/UI/Card/Card";
import { meal } from "../types";

type Props = {
  meals: meal[];
  addMealToCart: Function;
};

const Home = ({ meals, addMealToCart }: Props) => {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals meals={meals} addMealToCart={addMealToCart} />
    </div>
  );
};

export default Home;
