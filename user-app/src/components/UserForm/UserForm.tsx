import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../types";
import Button from "../UI/Button/Button";
import styles from "./UserForm.module.scss";

type Props = {
  saveUser: Function;
};

const UserForm = ({ saveUser }: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      id: Math.random(),
      name,
      age: +age,
    };

    saveUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="age">Age</label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <Button type="submit">Create user</Button>
    </form>
  );
};

export default UserForm;
