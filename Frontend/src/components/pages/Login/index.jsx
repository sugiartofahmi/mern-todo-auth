import AuthLayout from "../../templates/AuthLayout";
import Button from "@/components/atoms/Button";
import TextField from "@/components/atoms/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TokenService from "@/services/token.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/users/login", user);
      TokenService.saveToken(res.data.token);
      TokenService.saveUserData(res.data.user);
      setUser({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <AuthLayout>
      <div className="flex flex-col  bg-[#161A23] w-[80vh] h-[70vh] rounded-lg p-5 justify-between items-center">
        <div className="flex flex-col gap-y-5 w-full ">
          <div className="flex w-full justify-between ">
            <h1 className="text-2xl font-semibold   ">Login</h1>
          </div>
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

        <div className="flex w-full flex-col justify-center items-center gap-y-10">
          <Button
            onClick={handleSubmit}
            text="Submit"
            className="bg-blue-500 w-[100px] rounded p-2 "
          />
          <h1>
            Don't have an account yet ?{" "}
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </h1>
        </div>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Login;
