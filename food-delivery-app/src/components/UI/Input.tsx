import classes from "./Input.module.scss";

type InputProps = {
  id: string;
  type: string;
  value: string;
  min?: string;
  max?: string;
  step?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type Props = {
  label: string;
  input: InputProps;
};

const Input = ({ label, input }: Props) => {
  const { id, type, value, min, max, step, onChange } = input;

  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
