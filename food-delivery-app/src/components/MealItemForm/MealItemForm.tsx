import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.scss";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
