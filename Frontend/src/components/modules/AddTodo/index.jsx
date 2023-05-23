import Modal from "@/components/organism/Modal";
import TextField from "@/components/atoms/TextField";
import Button from "../../atoms/Button";
import { MdOutlineCancel } from "react-icons/md";

const AddTodo = ({ onClick }) => {
  return (
    <Modal>
      <form className="flex flex-col  bg-[#161A23] w-[80vh] h-[70vh] rounded-lg p-5 justify-between items-center">
        <div className="flex flex-col gap-y-5 w-full ">
          <div className="flex w-full justify-between ">
            <h1 className="text-xl font-semibold   ">Add Todo</h1>
            <Button onClick={onClick}>
              <MdOutlineCancel size={28} />
            </Button>
          </div>
          <TextField label="Todo" type="text" />
          <div className="flex flex-col gap-y-3 ">
            <label htmlFor="">Priority</label>
            <select
              name=""
              id=""
              className="text-black p-2 rounded focus:outline-none "
            >
              <option disabled>Select Priority</option>
              <option value="" className="text-red-500  ">
                High
              </option>
              <option value="" className="text-yellow-500">
                Medium
              </option>
              <option value="" className="text-green-500">
                Low
              </option>
            </select>
          </div>
        </div>
        <Button text="Submit" className="bg-blue-500 w-[100px] rounded p-2 " />
      </form>
    </Modal>
  );
};

export default AddTodo;
