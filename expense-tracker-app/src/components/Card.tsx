import "./Card.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
