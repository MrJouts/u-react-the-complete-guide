import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

type Expense = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

type Props = {
  expenses: Expense[];
};
const Expenses = ({ expenses }: Props) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default Expenses;
