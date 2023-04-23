import React from "react";

const ButtonDeleteAllTasks = () => {

  const deleteAllTasks = () => {
    localStorage.clear('tasks');
   };

  return (
    <section className="d-flex justify-content-center mt-2">
      <button type="button" className="btn btn-warning" onClick={deleteAllTasks}>Borrar todo</button>
    </section>
  );
};

export default ButtonDeleteAllTasks;