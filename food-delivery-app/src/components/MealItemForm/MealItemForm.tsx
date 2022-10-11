import classes from "./MealItemForm.module.scss";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" />
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
