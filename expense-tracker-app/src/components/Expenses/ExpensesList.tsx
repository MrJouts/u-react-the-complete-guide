import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { Expense } from "../../types";

type Props = {
  items: Expense[];
};

const ExpensesList = ({ items }: Props) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
