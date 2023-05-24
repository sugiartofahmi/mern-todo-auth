import AddTodo from "@/components/modules/AddTodo";
import { useRecoilValue } from "recoil";
import { userState } from "@/store";
import TokenService from "@/services/token.js";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { modalAddTodo } from "../../../store";
const Navbar = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [modal, setModal] = useRecoilState(modalAddTodo);

  const handleLogout = () => {
    TokenService.removeToken();
    TokenService.removeUserData();
    navigate("/");
  };

  return (
    <header className="flex w-full h-[12vh] items-center justify-between bg-[#161A23] text-white px-[10vh]">
      <figure>
        <figcaption className="capitalize font-bold text-2xl">
          {user && user.name}
        </figcaption>
      </figure>
      <nav>
        <ul className="flex gap-5 text-base font-semibold">
          <button onClick={() => setModal(!modal)}>Create Todo</button>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
      {modal && <AddTodo onClick={() => setModal(!modal)} />}
    </header>
  );
};

export default Navbar;
