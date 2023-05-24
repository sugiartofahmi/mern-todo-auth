import MainLayout from "@/components/templates/MainLayout";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "@/components/atoms/Button";
import EditTodo from "../../modules/EditTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import TokenService from "@/services/token";
import { useRecoilValue, useRecoilState } from "recoil";
import { modalAddTodo, modalEditTodo, userState } from "@/store";
const Dashboard = () => {
  const modalAdd = useRecoilValue(modalAddTodo);
  const user = useRecoilValue(userState);
  const [modalEdit, setModalEdit] = useRecoilState(modalEditTodo);
  const [todos, setTodos] = useState([]);
  const config = {
    headers: {
      Authorization: TokenService.getToken(),
      user: user.id,
    },
  };

  const [id, setId] = useState("");

  const getTodos = async () => {
    const res = await axios.get("http://localhost:9000/todos", config);
    setTodos(res.data.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9000/todos/${id}`, config);
    getTodos();
  };

  const handleChangeStatus = async (id, status) => {
    const data = {
      status: status,
    };
    await axios.put(`http://localhost:9000/todos/${id}`, data, config);
    getTodos();
  };

  const handleGetId = (id) => {
    setId(id);
    setModalEdit(!modalEdit);
  };

  useEffect(() => {
    getTodos();
  }, [modalAdd, modalEdit]);

  return (
    <MainLayout>
      {modalEdit && (
        <EditTodo id={id} onClick={() => setModalEdit(!modalEdit)} />
      )}
      <section className="flex flex-row gap-x-5 items-center w-full min-h-[88vh] text-base  px-[10vh] text-black">
        <div className="flex flex-col w-[400px] border-[1px] border-gray-200 rounded-lg items-center h-[530px] pt-3 gap-y-5">
          <h1 className="text-lg font-semibold text-white">Todo</h1>
          <div className="flex flex-col w-full h-full overflow-auto px-3 pb-3 gap-y-2">
            {todos.length > 0 &&
              todos.map(
                (el, i) =>
                  el.status == "todo" && (
                    <div
                      key={i}
                      className={`flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ${
                        el.priority == 1
                          ? "bg-red-200"
                          : el.priority == 2
                          ? "bg-yellow-200"
                          : el.priority == 3 && "bg-green-200"
                      } `}
                    >
                      <div className="flex w-full justify-between ">
                        <div className="flex  w-3/4 ">
                          <h1 className=" capitalize text-justify w-full tracking-tighter ">
                            {el.todo}
                          </h1>
                        </div>
                        <div className="w-1/4 flex justify-end items-start  ">
                          <h1
                            className={`${
                              el.priority == 1
                                ? "text-red-600"
                                : el.priority == 2
                                ? "text-yellow-600"
                                : el.priority == 3 && "text-green-600"
                            }`}
                          >
                            {el.priority == 1
                              ? "High"
                              : el.priority == 2
                              ? "Medium"
                              : el.priority == 3 && "Low"}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-end items-center gap-x-2">
                        <Button onClick={() => handleDelete(el._id)}>
                          <BsTrash size={20} />
                        </Button>
                        <Button onClick={() => handleGetId(el._id)}>
                          <BiPencil size={20} />
                        </Button>
                        <Button
                          onClick={() => handleChangeStatus(el._id, "progress")}
                        >
                          <AiOutlineCheckCircle size={24} />
                        </Button>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="flex flex-col w-[400px] border-[1px] border-gray-200 rounded-lg items-center h-[530px] pt-3 gap-y-5">
          <h1 className="text-lg font-semibold text-white">On Progress</h1>
          <div className="flex flex-col w-full h-full overflow-auto px-3 pb-3 gap-y-2">
            {todos.length > 0 &&
              todos.map(
                (el, i) =>
                  el.status == "progress" && (
                    <div
                      key={i}
                      className={`flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ${
                        el.priority == 1
                          ? "bg-red-200"
                          : el.priority == 2
                          ? "bg-yellow-200"
                          : el.priority == 3 && "bg-green-200"
                      } `}
                    >
                      <div className="flex w-full justify-between ">
                        <div className="flex  w-3/4 ">
                          <h1 className=" capitalize text-justify w-full tracking-tighter ">
                            {el.todo}
                          </h1>
                        </div>
                        <div className="w-1/4 flex justify-end items-start  ">
                          <h1
                            className={`${
                              el.priority == 1
                                ? "text-red-600"
                                : el.priority == 2
                                ? "text-yellow-600"
                                : el.priority == 3 && "text-green-600"
                            }`}
                          >
                            {el.priority == 1
                              ? "High"
                              : el.priority == 2
                              ? "Medium"
                              : el.priority == 3 && "Low"}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-end items-center gap-x-2">
                        <Button
                          onClick={() => handleChangeStatus(el._id, "todo")}
                        >
                          <MdOutlineCancel size={24} />
                        </Button>
                        <Button
                          onClick={() =>
                            handleChangeStatus(el._id, "completed")
                          }
                        >
                          <AiOutlineCheckCircle size={24} />
                        </Button>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="flex flex-col w-[400px] border-[1px] border-gray-200 rounded-lg items-center h-[530px] pt-3 gap-y-5">
          <h1 className="text-lg font-semibold text-white">Completed</h1>
          <div className="flex flex-col w-full h-full overflow-auto px-3 pb-3 gap-y-2">
            {todos.length > 0 &&
              todos.map(
                (el, i) =>
                  el.status == "completed" && (
                    <div
                      key={i}
                      className={`flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ${
                        el.priority == 1
                          ? "bg-red-200"
                          : el.priority == 2
                          ? "bg-yellow-200"
                          : el.priority == 3 && "bg-green-200"
                      } `}
                    >
                      <div className="flex w-full justify-between ">
                        <div className="flex  w-3/4 ">
                          <h1 className=" capitalize text-justify w-full tracking-tighter ">
                            {el.todo}
                          </h1>
                        </div>
                        <div className="w-1/4 flex justify-end items-start  ">
                          <h1
                            className={`${
                              el.priority == 1
                                ? "text-red-600"
                                : el.priority == 2
                                ? "text-yellow-600"
                                : el.priority == 3 && "text-green-600"
                            }`}
                          >
                            {el.priority == 1
                              ? "High"
                              : el.priority == 2
                              ? "Medium"
                              : el.priority == 3 && "Low"}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-end items-center gap-x-2">
                        <Button onClick={() => handleDelete(el._id)}>
                          <BsTrash size={20} />
                        </Button>
                        <Button
                          onClick={() => handleChangeStatus(el._id, "progress")}
                        >
                          <MdOutlineCancel size={24} />
                        </Button>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Dashboard;
