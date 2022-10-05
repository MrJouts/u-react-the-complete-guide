import { ChangeEventHandler } from "react";
import styles from "./UserFormInput.module.scss";

type Props = {
  label: string;
  value: string;
  onChange: ChangeEventHandler;
};

const UserFormInput = ({ label, value, onChange }: Props): JSX.Element => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default UserFormInput;
