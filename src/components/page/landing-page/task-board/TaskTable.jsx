import TaskTableRow from "./TaskTableRow";

const TaskTable = () => {
  return (
    <div className="overflow-x-auto my-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="lg:w-[1%]"></th>
            <th className="lg:w-[15%]">Title</th>
            <th className="lg:w-[45%]">Description</th>
            <th className="lg:w-[20%]">Tags</th>
            <th className="lg:w-[10%]">Priority</th>
            <th className="lg:w-[10%]">Options</th>
          </tr>
        </thead>
        <tbody>
          <TaskTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
