import { useState } from "react";
import classes from "./Input.module.scss";

type Props = {
  id: string;
  label: string;
  type: string;
};

const Input = ({ id, label, type }: Props) => {
  const [value, setValue] = useState(1);
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} />
    </div>
  );
};

export default Input;
