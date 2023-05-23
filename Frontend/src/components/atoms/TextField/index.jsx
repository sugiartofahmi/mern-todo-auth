const TextField = ({ label, type, onChange, value }) => {
  return (
    <div className="flex flex-col gap-y-3 ">
      <label className="capitalize" htmlFor={label}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={label}
        className="text-black p-2 focus:outline-none rounded  "
        type={type}
      />
    </div>
  );
};

export default TextField;
