import { MouseEvent, MouseEventHandler, useState } from "react";
import { User } from "./types";
import { DEFAULT_USERS } from "./mocks/Users";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Title from "./components/UI/Title/Title";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSaveUser = (user: User) => {
    console.log(user);

    if (user.name.trim().length === 0) {
      setErrorMessage("Name cannot be empty.");
      return;
    }

    if (user.age <= 0) {
      setErrorMessage("Age cannot be 0 or lower.");
      return;
    }

    if (typeof user.age != "number" || isNaN(user.age)) {
      setErrorMessage("Age must be a number.");
      return;
    }

    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const toggleModal = (e: MouseEvent) => {
    e.stopPropagation();
    setErrorMessage(null);
  };

  return (
    <div className="user-app">
      <Title>Create user</Title>
      <UserForm saveUser={handleSaveUser} />
      <UserList users={users} />
      {errorMessage && (
        <Modal
          onClick={toggleModal}
          title="Ops! an error occurred"
          message={errorMessage}
        />
      )}
    </div>
  );
}

export default App;
