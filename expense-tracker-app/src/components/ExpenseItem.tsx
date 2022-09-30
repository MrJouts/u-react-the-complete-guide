import "./ExpenseItem.css";

type Props = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem = ({ title, amount, date }: Props) => {
  return (
    <div className="expense-item">
      <div>
        <div>{date.toLocaleString("es-AR", { month: "long" })}</div>
        <div>{date.toLocaleString("es-AR", { day: "2-digit" })}</div>
        <div>{date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
