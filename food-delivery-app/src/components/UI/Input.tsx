import { useState } from "react";
import classes from "./Input.module.scss";

type Props = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ id, label, type, value, onChange }: Props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
