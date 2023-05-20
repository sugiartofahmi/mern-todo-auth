const Main = (props) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center ">
      {props.children}
    </main>
  );
};

export default Main;
