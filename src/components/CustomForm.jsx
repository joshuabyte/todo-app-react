/* Importing the PlusIcon from the heroicons package. */
import { PlusIcon } from "@heroicons/react/24/solid";
/* Importing the useState hook from the react package. */
import { useState } from "react";

const CustomForm = ({ addTask }) => {
  /* A hook that is used to set the state of the task. */
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTask("");
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder={"Enter Task"}
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
