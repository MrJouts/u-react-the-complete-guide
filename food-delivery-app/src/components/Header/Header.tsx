import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
