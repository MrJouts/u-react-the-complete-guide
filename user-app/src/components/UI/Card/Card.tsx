import styles from "./Card.module.scss";

type Props = {
  children: JSX.Element;
  onClick?: any;
};

const Card = ({ children, onClick }: Props): JSX.Element => {
  return (
    <div className={styles.card} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
