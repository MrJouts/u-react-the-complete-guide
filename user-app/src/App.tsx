import { MouseEvent, MouseEventHandler, SetStateAction, useState } from "react";
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

    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const toggleModal = (e: MouseEvent) => {
    e.stopPropagation();
    setErrorMessage(null);
  };

  return (
    <div className="user-app">
      <Title>Create user</Title>
      <UserForm
        saveUser={handleSaveUser}
        throwError={(error: SetStateAction<string | null>) =>
          setErrorMessage(error)
        }
      />
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
