import { MouseEvent, MouseEventHandler, useState } from "react";
import { User } from "./types";
import { DEFAULT_USERS } from "./mocks/Users";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Title from "./components/UI/Title/Title";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const [isFormError, setIsFormError] = useState(true);

  const handleSaveUser = (user: User) => {
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
      {isFormError && <Modal onClick={toggleModal} />}
    </div>
  );
}

export default App;
