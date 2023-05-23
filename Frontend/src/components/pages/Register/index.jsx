import AuthLayout from "../../templates/AuthLayout";
import Button from "@/components/atoms/Button";
import TextField from "@/components/atoms/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/users/register", user);
      toast.success("Success", {
        position: toast.POSITION.TOP_CENTER,
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error("Failed", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <AuthLayout>
      <form className="flex flex-col  bg-[#161A23] w-[80vh] h-[70vh] rounded-lg p-5 justify-between items-center">
        <div className="flex flex-col gap-y-5 w-full ">
          <div className="flex w-full justify-between ">
            <h1 className="text-2xl font-semibold  ">Register</h1>
          </div>
          <TextField
            value={user.name}
            onChange={handleChange}
            label="name"
            type="text"
          />
          <TextField
            value={user.email}
            onChange={handleChange}
            label="email"
            type="email"
          />
          <TextField
            value={user.password}
            onChange={handleChange}
            label="password"
            type="password"
          />
        </div>
        <div className="flex w-full flex-col justify-center items-center gap-y-5">
          <Button
            onClick={handleSubmit}
            text="Submit"
            className="bg-blue-500 w-[100px] rounded p-2 "
          />
          <ToastContainer />

          <h1>
            Already have an account?
            <Link className="text-blue-500" to="/">
              Login
            </Link>
          </h1>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
