import { MdOutlineCancel } from "react-icons/md";
import Button from "@/components/atoms/Button";

const Form = ({ children, onClick }) => {
  return (
    <form className="flex flex-col  bg-[#161A23] w-[80vh] h-[70vh] rounded-lg p-5 gap-y-5">
      <div className="flex w-full justify-between ">
        <h1 className="text-xl font-semibold   ">Add Todo</h1>
        <Button onClick={onClick}>
          <MdOutlineCancel size={28} />
        </Button>
      </div>
      {children}
    </form>
  );
};

export default Form;
