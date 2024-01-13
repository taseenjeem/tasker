const DeleteIndividualTaskBtn = () => {
  return (
    <>
      {/* New task adding modal button */}
      <button
        className="font-semibold underline underline-offset-2 text-accent mr-2"
        onClick={() => document.getElementById("delete_this_task").showModal()}
      >
        Delete
      </button>
      {/* Task adding modal */}
      <dialog
        id="delete_this_task"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-xl">Delete This Tasks</h3>
          <div className="py-4">
            <p>Are you sure to delete this task?</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary mr-2">Yes, delete</button>
              <button className="btn btn-accent">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteIndividualTaskBtn;
