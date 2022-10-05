import styles from "./Button.module.scss";

type Props = {
  children: string;
  type: string;
};

const Button = ({ children }: Props): JSX.Element => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
