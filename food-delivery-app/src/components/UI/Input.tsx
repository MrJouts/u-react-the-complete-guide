import React from "react";
import classes from "./Input.module.scss";

type InputProps = {
  id: string;
  type: string;
  defaultValue: string;
  min?: string;
  max?: string;
  step?: string;
};

type Props = {
  label: string;
  input: InputProps;
};

const Input = React.forwardRef(
  ({ label, input }: Props, ref: React.Ref<any>) => {
    const { id, type, defaultValue, min, max, step } = input;

    return (
      <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
