import { useState } from "react";
import ShoppingList from "./ShoppingList"; // or any child component
import data from "../data/items"; // if using sample item data

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode((prev) => !prev);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h1>Shopping List</h1>
        <button onClick={handleClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
