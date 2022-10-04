import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

const DEFAULT_USERS = [
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

  return (
    <div className="user-app">
      <UserForm />
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
