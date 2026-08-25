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
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>There are nothing to do yet</p>
      )}
    </>
  );
}
export default TaskList;
