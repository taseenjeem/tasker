import AddTaskModalBtn from "./AddTaskModalBtn";
import DeleteAllTasksBtn from "./DeleteAllTasksBtn";

const ActionButtons = () => {
  return (
    <div>
      {/* New task adding modal button */}
      <AddTaskModalBtn />

      {/* Delete all task button */}
      <DeleteAllTasksBtn />
    </div>
  );
};

export default ActionButtons;
