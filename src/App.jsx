import { useState } from "react";
/* Importing the CustomForm component from the components folder. */
import CustomForm from "./components/CustomForm";

function App() {
  const [tasks, setTasks] = useState([]);

  //The function addTask takes the task object created from the input at CustomForm. Then with setTasks, an anonymous function receives the previous state of "tasks" which initially is an empty array. When addTask receives a new object it updates the state and adds the new object.
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
