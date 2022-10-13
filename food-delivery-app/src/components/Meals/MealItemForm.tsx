import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.scss";

type Props = {
  addMealAmount: Function;
};

const MealItemForm = ({ addMealAmount }: Props) => {
  const [amount, setAmount] = useState<string>("1");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addMealAmount(amount);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        id="amount"
        label="Amount"
        type="number"
        value={amount}
        onChange={handleInputChange}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
