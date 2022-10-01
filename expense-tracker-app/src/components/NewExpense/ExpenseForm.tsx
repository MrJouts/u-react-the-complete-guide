import { MouseEventHandler, useState } from "react";
import "./ExpenseForm.css";

type Form = {
  changeEvent: React.ChangeEvent<HTMLInputElement>;
  submitEvent: React.FormEvent;
};

type Props = {
  onSaveExpense: Function;
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

const ExpenseForm = ({ onSaveExpense, onCancel }: Props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: Form["changeEvent"]) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: Form["changeEvent"]) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: Form["changeEvent"]) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: Form["submitEvent"]) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
