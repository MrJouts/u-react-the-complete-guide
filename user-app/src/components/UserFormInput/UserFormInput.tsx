import { ChangeEventHandler } from "react";
import styles from "./UserFormInput.module.scss";

type Props = {
  type: string;
  label: string;
  innerRef: any;
};

const UserFormInput = ({ type, label, innerRef }: Props): JSX.Element => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} ref={innerRef} />
    </div>
  );
};

export default UserFormInput;
