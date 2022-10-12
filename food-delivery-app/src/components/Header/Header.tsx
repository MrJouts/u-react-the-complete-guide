import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import { CartItem } from "../../types";

type Props = {
  cartItems: CartItem[] | null;
};

const Header = ({ cartItems }: Props) => {
  const getCartItemsAmount = (): number => {
    let totalAmount = 0;
    cartItems?.forEach((item) => {
      totalAmount += +item.amount;
    });

    return totalAmount;
  };

  return (
    <>
      <div className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton cartItemsAmount={getCartItemsAmount()} />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
