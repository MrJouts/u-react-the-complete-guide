import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Title</label>
          <input id="amount" type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Title</label>
          <input id="date" type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
