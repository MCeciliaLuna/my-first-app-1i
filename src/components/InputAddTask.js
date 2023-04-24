import React from "react";
import { useForm } from "react-hook-form";

const InputAddTask = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createTask = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className="card m-3" onSubmit={handleSubmit(createTask)}>
      <div className="card-body d-flex py-4">
        <p className="d-flex align-items-center mx-2 mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="currentColor"
            className="icon-phone text-info bi bi-pen-fill"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
        </p>
        <input
          type="text"
          className="padding-phone text-phone form-control border-0 mx-3 py-2"
          id="exampleFormControlInput1"
          placeholder="Insert you task"
          {...register("task", { required: true })}
          maxLength="30"
        />
        <div className="d-flex align-items-center">
          <button
            type="submit"
            className="btn btn-info p-2 ms-1 rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="icon-phone padding-icon text-light mt-0 bi bi-plus-lg d-flex align-items-center"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
        </div>
      </div>
      {errors.task && (
        <span className="text-center text-info fw-medium mb-4">
          You must enter a task
        </span>
      )}
    </form>
  );
};

export default InputAddTask;
