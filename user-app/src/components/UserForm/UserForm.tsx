import { ChangeEvent, ReactEventHandler, useState } from "react";

type Events = {};

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleSubmit = () => {
    event?.preventDefault();

    console.log("new user", name, age);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" />
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default UserForm;
