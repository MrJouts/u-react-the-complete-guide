import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
