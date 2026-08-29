import type { ITasks } from "../interfaces/Task";
import styles from "./TaskList.module.css";

interface ITaskListProps {
  taskList: ITasks[];
  handleDeleteList(id: number): void;
  handleEditTask(task: ITasks): void;
}

function TaskList({
  taskList,
  handleDeleteList,
  handleEditTask,
}: ITaskListProps) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Difficulty: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i
                className="bi bi-pencil"
                onClick={() => {
                  handleEditTask(task);
                }}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDeleteList(task.id);
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>There is nothing to do yet</p>
      )}
    </>
  );
}
export default TaskList;
