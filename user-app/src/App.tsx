import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

type User = {
  id: number;
  name: string;
  age: number;
};

const DEFAULT_USERS: User[] = [
  {
    id: 1,
    name: "Carlos",
    age: 45,
  },
  {
    id: 2,
    name: "Marcela",
    age: 24,
  },
  {
    id: 2,
    name: "Gonzalo",
    age: 33,
  },
];

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const handleSaveUser = (user: User) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div className="user-app">
      <UserForm saveUser={handleSaveUser} />
      <UserList />
      {users.map(({ name, age }) => (
        <div>
          <span>{name}</span>
          <span>{age}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
