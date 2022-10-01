import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

type Props = {
  onSaveExpense: Function;
};

const NewExpense = ({ onSaveExpense }: Props) => {
  const saveExpense = (enteredExpense: any) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    onSaveExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
};

export default NewExpense;
