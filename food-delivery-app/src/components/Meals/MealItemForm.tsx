import { FormEvent, useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.scss";

type Props = {
  id: string;
  onAddToCart: (amount: number) => void;
};

const MealItemForm = ({ id, onAddToCart }: Props) => {
  const [amountIsValid, setAmountIsvalid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current?.value!;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsvalid(false);
      return;
    }

    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${id}`,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please, enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
