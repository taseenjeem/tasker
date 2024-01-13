import { FaTrashAlt } from "react-icons/fa";
import AddTaskModalBtn from "./AddTaskModalBtn";

const ActionButtons = () => {
  return (
    <div>
      {/* New task adding modal button */}
      <AddTaskModalBtn />

      {/* Delete all task button */}
      <button className="btn btn-accent ml-2">
        <FaTrashAlt className="text-lg" /> Delete All Tasks
      </button>
    </div>
  );
};

export default ActionButtons;
