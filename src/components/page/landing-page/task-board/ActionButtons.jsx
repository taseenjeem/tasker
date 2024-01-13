import { IoAddCircle } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

const ActionButtons = () => {
  return (
    <div>
      <button
        className="btn btn-neutral"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <IoAddCircle className="text-xl" /> Add Task
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <button className="btn btn-accent ml-2">
        <FaTrashAlt className="text-lg" /> Delete All Tasks
      </button>
    </div>
  );
};

export default ActionButtons;
