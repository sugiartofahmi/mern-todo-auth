import MainLayout from "@/components/templates/MainLayout";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "@/components/atoms/Button";
import EditTodo from "../../modules/EditTodo";
import { useState } from "react";
const Dashboard = () => {
  const [modal, setModal] = useState(false);

  return (
    <MainLayout>
      {modal && <EditTodo onClick={() => setModal(!modal)} />}
      <section className="flex flex-row gap-x-5 items-center w-full min-h-[88vh] text-base  px-[10vh] text-black">
        <div className="flex flex-col w-[400px] border-[1px] border-gray-200 rounded-lg items-center h-[530px] pt-3 gap-y-5">
          <h1 className="text-lg font-semibold text-white">Todo</h1>
          <div className="flex flex-col w-full h-full overflow-auto px-3 pb-3 gap-y-2">
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-red-600">High</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button onClick={() => setModal(!modal)}>
                  <BiPencil size={20} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-red-600">High</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <BiPencil size={20} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-red-600">High</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <BiPencil size={20} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-yellow-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-yellow-600">Medium</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <BiPencil size={20} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-green-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-green-600">Low</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <BiPencil size={20} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[400px] border-[1px] border-gray-200 rounded-lg items-center h-[530px] pt-3 gap-y-5">
          <h1 className="text-lg font-semibold text-white">On Progress</h1>
          <div className="flex flex-col w-full h-full overflow-auto px-3 pb-3 gap-y-2">
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200  ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-red-600">High</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <MdOutlineCancel size={24} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-yellow-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-yellow-600">Medium</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <MdOutlineCancel size={24} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-green-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-green-600">Low</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <MdOutlineCancel size={24} />
                </Button>
                <Button>
                  <AiOutlineCheckCircle size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[400px] border-[1px] border-gray-200 rounded-lg items-center h-[530px] pt-3 gap-y-5">
          <h1 className="text-lg font-semibold text-white">Completed</h1>
          <div className="flex flex-col w-full h-full overflow-auto px-3 pb-3 gap-y-2">
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-red-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-red-600">High</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <MdOutlineCancel size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-yellow-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-yellow-600">Medium</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <MdOutlineCancel size={24} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full items-end  rounded gap-y-5 drop-shadow-lg p-3 bg-green-200 ">
              <div className="flex w-full justify-between ">
                <div className="flex  w-3/4 ">
                  <h1 className=" capitalize text-justify w-full tracking-tighter ">
                    learn react redux
                  </h1>
                </div>
                <div className="w-1/4 flex justify-end items-start  ">
                  <button className=" text-green-600">Low</button>
                </div>
              </div>
              <div className="flex flex-end items-center gap-x-2">
                <Button>
                  <BsTrash size={20} />
                </Button>
                <Button>
                  <MdOutlineCancel size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Dashboard;
