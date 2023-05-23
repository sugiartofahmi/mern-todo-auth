const Button = (props) => {
  const { className = "", children, text, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} hover:scale-125 ease-in-out duration-300`}
    >
      {text || children}
    </button>
  );
};

export default Button;
