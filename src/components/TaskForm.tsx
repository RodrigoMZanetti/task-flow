import React, { useState, useEffect } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

import styles from "./TaskForm.module.css";

//interface
import type { ITaks } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITaks[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITaks[]>>;
}

function TaskForm({ btnText, taskList, setTaskList }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  function addTaskHandler(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);

    const newTask: ITaks = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);
    setTitle("");
    setDifficulty(0);

    console.log(taskList);
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
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          onChange={handleChange}
          id="Title"
          value={title}
        />
      </div>

      <div className={styles.input__container}>
        <label htmlFor="difficulty">Difficulty</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty"
          onChange={handleChange}
          id="difficulty"
          value={difficulty}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
}
export default TaskForm;
