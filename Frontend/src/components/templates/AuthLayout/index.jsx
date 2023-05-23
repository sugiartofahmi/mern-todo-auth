const AuthLayout = (props) => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center font-sora bg-[#0C1017] text-white ">
      {props.children}
    </main>
  );
};

export default AuthLayout;
