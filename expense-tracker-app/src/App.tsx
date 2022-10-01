import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { INITIAL_EXPENSES } from "./mocks/expenes";
import { Expense } from "./types";

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
