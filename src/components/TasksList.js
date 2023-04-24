import { useEffect, useState} from "react";

const TasksList = ({tasks, setTasks}) => {

  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(storedTasks ? storedTasks : []);
  }, [localStorage.getItem('tasks')]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const done = task.done === "not yet" ? "finished" : "not yet";
      return {...task, done};
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleTaskChange = (id, newTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: newTask };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };


  return (
    <section className="mt-3">
      {!tasks.length ? (
        <div className="card mt-3 mx-5 bg-warning">
          <div className="card-body text-light text-center">
            <h6> To enjoy! You have no pending tasks</h6>
          </div>
        </div>
        ) : (
          tasks.map((task) => (
        <div className={`card m-3 ${task.done === "finished" ? "bg-warning" : "bg-info"}`} key={task.id}>
        <div className="card-body d-flex">
          <p className="d-flex align-items-center mx-2 mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="text-light bi bi-pin-angle-fill" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
</svg>
          </p>
          <input
            type="text"
            className={`form-control border-0 ${task.done === "finished" ? "bg-warning" : "bg-info"} mx-3 fw-bold`}
            id="exampleFormControlInput1"
            defaultValue={task.task}
                onChange={(e) => handleTaskChange(task.id, e.target.value)}
          />
          <div className="d-flex align-items-center">
          <input
              className="form-check-input mt-0 p-3"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              onChange={() => handleCheckboxChange(task.id)}
              checked={task.done === "finished"}
            />
            <button type="button" className="btn btn-danger p-2 ms-2 rounded-circle" onClick={(id)=>deleteTask(task.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="mt-0 bi bi-x-lg d-flex align-items-center" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
            </button>
          </div>
        </div>
      </div>
      ))
      )}
    </section>
  );
};

export default TasksList;