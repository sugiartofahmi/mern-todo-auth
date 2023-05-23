const TextField = ({ label, type }) => {
  return (
    <div className="flex flex-col gap-y-3 ">
      <label htmlFor={label}>{label}</label>
      <input
        className="text-black p-2 focus:outline-none rounded capitalize "
        type={type}
      />
    </div>
  );
};

export default TextField;
