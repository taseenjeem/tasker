import { FaStar } from "react-icons/fa6";
import TaskEditButton from "./TaskEditButton";
import DeleteIndividualTaskBtn from "./DeleteIndividualTaskBtn";

const TaskTableRow = () => {
  return (
    <tr>
      <th>
        <FaStar className="text-xl cursor-pointer text-yellow-500" />
      </th>
      <td>Cy Ganderton</td>
      <td>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas
        error modi reprehenderit quod hic? Quam, at? Facere, ad beatae!
      </td>
      <td className="flex flex-wrap gap-1">
        <div className="badge badge-primary text-xs font-semibold">primary</div>
      </td>
      <td>High</td>
      <td>
        <DeleteIndividualTaskBtn />
        <TaskEditButton />
      </td>
    </tr>
  );
};

export default TaskTableRow;
