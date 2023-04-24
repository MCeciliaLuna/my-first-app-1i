import React from "react";

const ButtonDeleteAllTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const showButton = storedTasks && storedTasks.length > 0;

  const deleteAllTasks = () => {
    localStorage.clear("tasks");
    window.location.reload();
  };

  return showButton ? (
    <section className="d-flex justify-content-center mt-2">
      <button
        type="button"
        className="btn btn-warning"
        onClick={deleteAllTasks}
      >
        Borrar todo
      </button>
    </section>
  ) : null;
};

export default ButtonDeleteAllTasks;
