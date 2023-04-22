import React from 'react';

const AddTask = () => {
  return (
      <section class="card m-3">
        <div class="card-body d-flex py-4">
          <p className="d-flex align-items-center mb-0">🤔</p>
          <input
            type="text"
            class="form-control border-0 mx-3 py-2"
            id="exampleFormControlInput1"
            placeholder="Insert you task"
          />
          <div className="d-flex align-items-center">
            <button type="button" class="btn p-0 ms-1">
              ✅
            </button>
          </div>
        </div>
      </section>
  );
};

export default AddTask;