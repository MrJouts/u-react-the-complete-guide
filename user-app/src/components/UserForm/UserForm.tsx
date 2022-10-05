import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../types";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import UserFormInput from "../UserFormInput/UserFormInput";
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
    <Card>
      <form onSubmit={handleSubmit} className={styles.form}>
        <UserFormInput label="Name" value={name} onChange={handleNameChange} />
        <UserFormInput label="Age" value={age} onChange={handleAgeChange} />
        <Button type="submit">Create user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
