import { ChangeEventHandler } from "react";
import styles from "./UserFormInput.module.scss";

type Props = {
  type: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler;
};

const UserFormInput = ({
  type,
  label,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default UserFormInput;
