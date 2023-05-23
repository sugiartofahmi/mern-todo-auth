import Navbar from "@/components/organism/Navbar";
import Button from "@/components/atoms/Button";
const MainLayout = (props) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center font-sora bg-[#0C1017] text-white ">
      <Navbar />
      {props.children}
    </main>
  );
};

export default MainLayout;
