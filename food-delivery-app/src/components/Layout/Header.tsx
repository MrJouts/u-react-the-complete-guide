import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import { CartItem } from "../../types";

type Props = {
  cartItems: CartItem[] | null;
  openModal: () => void;
};

const Header = ({ cartItems, openModal }: Props) => {
  const getCartItemsAmount = (): number => {
    let totalAmount = 0;
    cartItems?.forEach((item) => {
      totalAmount += +item.amount;
    });

    return totalAmount;
  };

  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton
          cartItemsAmount={getCartItemsAmount()}
          onClick={openModal}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;