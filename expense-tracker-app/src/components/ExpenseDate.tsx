import "./ExpenseDate.css";

type Props = {
  date: Date;
};

const ExpenseDate = ({ date }: Props) => {
  const month = date.toLocaleString("es-AR", { month: "long" });
  const day = date.toLocaleString("es-AR", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
