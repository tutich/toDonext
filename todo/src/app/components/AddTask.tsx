import { FiPlus } from "react-icons/fi";

const AddTask = () => {
  return (
    <div>
        <button className="btn btn-primary w-full text-xl">Add new task <FiPlus size={20} className="font-bold" /></button>
    </div>
  )
}

export default AddTask