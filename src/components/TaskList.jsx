/* Importing the TaskItem component from the TaskItem.js file. */
import TaskItem from "./TaskItem";

//Styles
import styles from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
