import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

type Props = {
  onAddExpense: Function;
};

const NewExpense = ({ onAddExpense }: Props) => {
  const saveExpense = (enteredExpense: any) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
};

export default NewExpense;
