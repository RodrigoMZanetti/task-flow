import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
}

function TaskForm({ btnText }: Props) {
  return (
    <form className={styles.form}>
      <div className={styles.input__container}>
        <label htmlFor="Title">Title</label>
        <input type="text" name="title" placeholder="Task title" />
      </div>
      <div className={styles.input__container}>
        <label htmlFor="difficulty">Difficulty</label>
        <input type="text" name="difficulty" placeholder="Difficulty" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}
export default TaskForm;
