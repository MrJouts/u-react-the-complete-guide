import classes from "./Input.module.scss";

const Input = () => {
  return (
    <div className={classes.input}>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" />
    </div>
  );
};

export default Input;
