import styles from "./Card.module.scss";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props): JSX.Element => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
