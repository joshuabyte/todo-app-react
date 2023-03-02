import { useState } from "react";
/* Importing the CustomForm component from the components folder. */
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //The function addTask takes the task object created from the input at CustomForm. Then with setTasks, an anonymous function receives the previous state of "tasks" which initially is an empty array. When addTask receives a new object it updates the state and adds the new object.
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    //TODO: Previous state focus
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    // TODO: Set focus back to original
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      <CustomForm addTask={addTask} />
      {/* A conditional rendering. If tasks is true, then it will render the TaskList component. */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
