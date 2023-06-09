import Modal from "@/components/organism/Modal";
import TextField from "@/components/atoms/TextField";
import Button from "../../atoms/Button";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import TokenService from "@/services/token";

const EditTodo = ({ onClick, id }) => {
  const [todo, setTodo] = useState({
    todo: "",
    priority: "",
  });
  const config = {
    headers: {
      Authorization: TokenService.getToken(),
    },
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const getTodo = async () => {
    const res = await axios.get(`http://localhost:9000/todos/${id}`, config);
    setTodo({ todo: res.data.data.todo, priority: res.data.data.priority });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:9000/todos/${id}`, todo, config);
    setTodo({
      todo: "",
      priority: "",
    });
  };

  useEffect(() => {
    getTodo();
  }, [id]);
  return (
    <Modal>
      <div className="flex flex-col  bg-[#161A23] w-[80vh] h-[70vh] rounded-lg p-5 justify-between items-center">
        <div className="flex flex-col gap-y-5 w-full ">
          <div className="flex w-full justify-between ">
            <h1 className="text-xl font-semibold   ">Edit Todo</h1>
            <Button onClick={onClick}>
              <MdOutlineCancel size={28} />
            </Button>
          </div>
          <TextField
            value={todo.todo}
            onChange={handleChange}
            label="todo"
            type="text"
          />
          <div className="flex flex-col gap-y-3 ">
            <label htmlFor="">Priority</label>
            <select
              value={todo.priority}
              onChange={handleChange}
              name="priority"
              id=""
              className="text-black p-2 rounded focus:outline-none "
            >
              <option disabled>Select Priority</option>
              <option value="1" className="text-red-500  ">
                High
              </option>
              <option value="2" className="text-yellow-500">
                Medium
              </option>
              <option value="3" className="text-green-500">
                Low
              </option>
            </select>
          </div>
        </div>
        <Button
          onClick={handleUpdate}
          text="Submit"
          className="bg-blue-500 w-[100px] rounded p-2 "
        />
      </div>
    </Modal>
  );
};

export default EditTodo;
