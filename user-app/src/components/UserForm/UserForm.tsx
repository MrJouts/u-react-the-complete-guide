import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../types";

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

    const user: User = {
      id: Math.random(),
      name,
      age: +age,
    };

    saveUser(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" value={age} onChange={handleAgeChange} />
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default UserForm;
