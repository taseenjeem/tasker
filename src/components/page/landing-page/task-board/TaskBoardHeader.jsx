import ActionButtons from "./ActionButtons";
import SearchBar from "./SearchBar";

const TaskBoardHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full">
      <h3 className="text-3xl font-semibold">Your Tasks</h3>
      <SearchBar />
      <ActionButtons />
    </div>
  );
};

export default TaskBoardHeader;