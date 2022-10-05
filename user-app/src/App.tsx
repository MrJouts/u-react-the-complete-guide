import { MouseEvent, MouseEventHandler, useState } from "react";
import { User } from "./types";
import { DEFAULT_USERS } from "./mocks/Users";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Title from "./components/UI/Title/Title";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const [isFormError, setIsFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSaveUser = (user: User) => {
    console.log(user);

    if (user.name.length === 0) {
      setIsFormError(true);
      setErrorMessage("Name cannot be empty.");
      return;
    }

    if (user.age <= 0) {
      setIsFormError(true);
      setErrorMessage("Age cannot be 0 or lower.");
      return;
    }

    if (typeof user.age != "number" || isNaN(user.age)) {
      setIsFormError(true);
      setErrorMessage("Age must be a number.");
      return;
    }

    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const toggleModal = (e: MouseEvent) => {
    console.log("click btn");

    e.stopPropagation();
    setIsFormError((isFormError) => !isFormError);
  };

  return (
    <div className="user-app">
      <Title>Create user</Title>
      <UserForm saveUser={handleSaveUser} />
      <UserList users={users} />
      {isFormError && (
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
