import React from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'


const AddTask = () => {

  const { register, handleSubmit, reset  } = useForm();
  const onSubmit = (data) => {
    const taskId = nanoid()
    const task = {
      id: taskId,
      task: data.task
    };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    reset()
    console.log(tasks)
  }

  return (
      <form className="card m-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body d-flex py-4">
          <p className="d-flex align-items-center mx-2 mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="text-info bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg>
          </p>
          <input
            type="text"
            className="form-control border-0 mx-3 py-2"
            id="exampleFormControlInput1"
            placeholder="Insert you task"
            {...register("task", { required: true })}
          />
          <div className="d-flex align-items-center">
            <button type="submit" className="btn btn-info p-2 ms-1 rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" className="text-light mt-0 bi bi-plus-lg d-flex align-items-center" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
            </button>
          </div>
        </div>
      </form>
  );
};

export default AddTask;