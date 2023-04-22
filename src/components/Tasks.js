import React from 'react';

const Tasks = () => {
  return (
    <section>
      <div class="card m-3 bg-info">
        <div class="card-body d-flex">
          <p className="d-flex align-items-center mb-0">📌</p>
          <input
            type="text"
            class="form-control border-0 bg-info mx-3"
            id="exampleFormControlInput1"
            defaultValue="My task"
          />
          <div className="d-flex align-items-center">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <button type="button" class="btn p-0 ms-1">
              ⛔
            </button>
          </div>
        </div>
      </div>

      <div class="card m-3 bg-warning">
        <div class="card-body d-flex">
          <p className="d-flex align-items-center mb-0">📌</p>
          <input
            type="text"
            class="form-control border-0 bg-warning mx-3"
            id="exampleFormControlInput1"
            defaultValue="My task"
          />
          <div className="d-flex align-items-center">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <button type="button" class="btn p-0 ms-1">
              ⛔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;