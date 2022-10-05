import { useState } from "react";
import { User } from "./types";
import { DEFAULT_USERS } from "./mocks/Users";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const handleSaveUser = (user: User) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div className="user-app">
      <UserForm saveUser={handleSaveUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
