import { useState } from "react";
import styles from "./App.module.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

//interface
import type { ITaks } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITaks[]>([]);

  function deleteTask(id: number) {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
  }

  return (
    <>
      <Modal />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What are you going to do?</h2>
          <TaskForm
            btnText="Create a new task"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Your shores</h2>
          <TaskList taskList={taskList} handleDeleteList={deleteTask} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
