import classes from "./Card.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
};

const Card = ({ children }: Props) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
