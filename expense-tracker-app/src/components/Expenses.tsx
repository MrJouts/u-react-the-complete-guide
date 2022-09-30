import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

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
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
