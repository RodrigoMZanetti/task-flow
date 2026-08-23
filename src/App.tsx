import styles from "./App.module.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What are you going to do?</h2>
          <TaskForm btnText="Create a new task" />
        </div>
        <div>
          <h2>Your shores</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
