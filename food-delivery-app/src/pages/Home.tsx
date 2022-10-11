import AvailableMeals from "../components/AvailableMeals/AvailableMeals";
import Header from "../components/Header/Header";
import MealsSummary from "../components/MealsSummary/MealsSummary";
import Card from "../components/UI/Card/Card";

const Home = () => {
  return (
    <div>
      <Header />
      <MealsSummary />
      <Card>
        <AvailableMeals />
      </Card>
    </div>
  );
};

export default Home;
