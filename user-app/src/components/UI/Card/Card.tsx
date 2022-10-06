import styles from "./Card.module.scss";

type Props = {
  children: JSX.Element;
  onClick?: any;
  className?: string;
};

const Card = ({ children, onClick, className }: Props): JSX.Element => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
