import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.scss";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input id="amount" label="Amount" type="number" />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
