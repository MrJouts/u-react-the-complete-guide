import Home from "./pages/Home";
import { useState } from "react";

import { meal } from "./types";
import { DUMMY_MEALS } from "./mocks/meals";

function App() {
  const [meals, setMeals] = useState<meal[]>(DUMMY_MEALS);

  return (
    <>
      <Home meals={meals} />
    </>
  );
}

export default App;
