import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { User } from "../../types";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import UserFormInput from "../UserFormInput/UserFormInput";

type Props = {
  saveUser: Function;
  throwError: Function;
};

const UserForm = ({ saveUser, throwError }: Props) => {
  const userName = useRef<HTMLInputElement>(null);
  const userAge = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = userName.current?.value;
    const age = userAge.current?.value;

    if (name?.trim().length === 0) {
      throwError("Name cannot be empty.");
      return;
    }

    if (age?.trim().length === 0) {
      throwError("Age cannot be empty.");
      return;
    }

    if (age && +age <= 0) {
      throwError("Age cannot be 0 or lower.");
      return;
    }

    if (age && (typeof +age != "number" || isNaN(+age))) {
      throwError("Age must be a number.");
      return;
    }

    if (name && age) {
      const newUser: User = {
        id: Math.random(),
        name,
        age: +age,
      };
      saveUser(newUser);
    }

    if (userName.current !== null) {
      userName.current.value = "";
    }

    if (userAge.current !== null) {
      userAge.current.value = "";
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <UserFormInput type="text" label="Name" innerRef={userName} />
        <UserFormInput type="number" label="Age" innerRef={userAge} />
        <Button type="submit">Create user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
