import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

type Props = {
  children: string;
  type: string;
  onClick?: MouseEventHandler;
};

const Button = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
