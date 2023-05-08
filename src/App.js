import "./App.css";
import InputAddTask from "./components/InputAddTask";
import ButtonDeleteAllTasks from "./components/ButtonDeleteAllTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Bounce } from "react-awesome-reveal";

function App() {
  const { reset } = useForm();
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks ? storedTasks : [];
  });

  const onSubmit = (data) => {
    const taskId = nanoid();
    const task = {
      id: taskId,
      task: data.task,
      done: "not yet",
      bg: "bg-info",
    };
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    reset();
  };

  return (
    <div className="container">
      <Bounce Fade cascade damping={0.1} triggerOnce="true">
      <Header />
      <InputAddTask onSubmit={onSubmit} />
      <TasksList tasks={tasks} setTasks={setTasks} reset={reset} />
      <ButtonDeleteAllTasks />
      <Footer />
      </Bounce>
    </div>
  );
}

export default App;
