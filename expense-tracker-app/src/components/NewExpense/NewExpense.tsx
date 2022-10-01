import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

type Props = {
  onAddExpense: Function;
};

const NewExpense = ({ onAddExpense }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleShowForm = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const saveExpense = (enteredExpense: any) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    onAddExpense(expense);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={toggleShowForm}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveExpense={saveExpense} onCancel={toggleShowForm} />
      )}
    </div>
  );
};

export default NewExpense;
