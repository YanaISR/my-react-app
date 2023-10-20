import "./App.css";
import { useState, createContext} from "react";
import Tasks from "./components/Tasks";

export const Context = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const handleAddNewTask = () => {
    const items = [...tasks, name];
    setTasks(items);
  };

  return (
    <Context.Provider value={tasks}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={handleAddNewTask}>Create new task</button>
      <Tasks />
    </Context.Provider>
  );
}

export default App;
