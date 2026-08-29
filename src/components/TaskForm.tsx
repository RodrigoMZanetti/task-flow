import React, { useState, useEffect } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

import styles from "./TaskForm.module.css";

//interface
import type { ITasks } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITasks[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITasks[]>>;
  task?: ITasks | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

function TaskForm({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  function addTaskHandler(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITasks = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input__container}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.input__container}>
        <label>Difficulty</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty"
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
}
export default TaskForm;
