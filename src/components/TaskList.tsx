import type { ITaks } from "../interfaces/Task";
import styles from "./TaskList.module.css";

interface ITaskListProps {
  taskList: ITaks[];
}

function TaskList({ taskList }: ITaskListProps) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Difficulty{task.difficulty}</p>
            </div>
            <div>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>There are nothing to do yet</p>
      )}
    </>
  );
}
export default TaskList;
