import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

type Expense = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpense = (expense: Expense) => {
    console.log("App - adding...", expense);
  };

  return (
    <div className="App">
      <NewExpense onSaveExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
