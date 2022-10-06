import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../types";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import UserFormInput from "../UserFormInput/UserFormInput";

type Props = {
  saveUser: Function;
  throwError: Function;
};

const UserForm = ({ saveUser, throwError }: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      throwError("Name cannot be empty.");
      return;
    }

    if (age.trim().length === 0) {
      throwError("Age cannot be empty.");
      return;
    }

    if (+age <= 0) {
      throwError("Age cannot be 0 or lower.");
      return;
    }

    if (typeof +age != "number" || isNaN(+age)) {
      throwError("Age must be a number.");
      return;
    }

    const newUser: User = {
      id: Math.random(),
      name,
      age: +age,
    };

    saveUser(newUser);
    setName("");
    setAge("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <UserFormInput
          type="text"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <UserFormInput
          type="number"
          label="Age"
          value={age}
          onChange={handleAgeChange}
        />
        <Button type="submit">Create user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
