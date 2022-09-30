import "./ExpenseItem.css";

type Props = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem = ({ title, amount, date }: Props) => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
