import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.scss";

const MealItemForm = () => {
  const [amount, setAmount] = useState<string>("1");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // agrego un objeto meal al carrito
    // tener en cuenta la quantity
    console.log("meal added...", amount);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setAmount(e.target.value);
    console.log("amount", amount);
  };

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
