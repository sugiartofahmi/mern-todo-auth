import AddTodo from "@/components/modules/AddTodo";
import { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <header className="flex w-full h-[12vh] items-center justify-between bg-[#161A23] text-white px-[10vh]">
      <figure>
        <figcaption className="capitalize font-bold text-2xl">
          fahmi sugiarto
        </figcaption>
      </figure>
      <nav>
        <ul className="flex gap-5 text-base font-semibold">
          <button onClick={() => setModal(!modal)}>Create Todo</button>
          <button>Logout</button>
        </ul>
      </nav>
      {modal && <AddTodo onClick={() => setModal(!modal)} />}
    </header>
  );
};

export default Navbar;
