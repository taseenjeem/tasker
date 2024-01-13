import { FaTrashAlt } from "react-icons/fa";

const DeleteAllTasksBtn = () => {
  return (
    <>
      {/* New task adding modal button */}
      <button
        className="btn btn-accent ml-2"
        onClick={() => document.getElementById("delete_all_task").showModal()}
      >
        <FaTrashAlt className="text-lg" /> Delete All Tasks
      </button>
      {/* Task adding modal */}
      <dialog
        id="delete_all_task"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-xl">Delete All Tasks</h3>
          <div className="py-4">
            <p>Are you sure to delete all your tasks?</p>
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

export default DeleteAllTasksBtn;
