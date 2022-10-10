import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
