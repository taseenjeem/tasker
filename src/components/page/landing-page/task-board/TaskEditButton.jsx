const TaskEditButton = () => {
  return (
    <>
      {/* Task edit modal button */}
      <button
        className="font-semibold underline underline-offset-2 text-primary"
        onClick={() => document.getElementById("task_edit_modal").showModal()}
      >
        Edit
      </button>
      {/* Task edit modal */}
      <dialog
        id="task_edit_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-xl">Edit Your Task</h3>
          <p className="py-4">
            <form action="">
              <div>
                <div className="label">
                  <span className="label-text text-primary">Task title</span>
                </div>
                <input
                  type="text"
                  className="input input-primary input-bordered input-sm w-full"
                />
              </div>
              <div className="my-5">
                <div className="label">
                  <span className="label-text text-primary">
                    Task Description
                  </span>
                </div>
                <textarea className="textarea textarea-primary w-full min-h-36"></textarea>
              </div>
              <div className="lg:flex lg:gap-2 w-full">
                <div className="w-full mb-5">
                  <div className="label">
                    <span className="label-text text-primary">Tags</span>
                  </div>
                  <input
                    type="text"
                    className="input input-primary input-bordered input-sm w-full"
                  />
                </div>
                <div className="w-full">
                  <div className="label">
                    <span className="label-text text-primary">
                      Select Priority
                    </span>
                  </div>
                  <select className="select select-primary select-sm w-full">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </form>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary mr-2">Edit Task</button>
              <button className="btn btn-accent">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TaskEditButton;
