import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

type Props = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem = ({ title, amount, date }: Props) => {
  const [cardTitle, setCardTitle] = useState(title);

  const clickHandler = () => setCardTitle("Updated!");

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{cardTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
