import AuthLayout from "../../templates/AuthLayout";
import Button from "@/components/atoms/Button";
import TextField from "@/components/atoms/TextField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout>
      <form className="flex flex-col  bg-[#161A23] w-[80vh] h-[70vh] rounded-lg p-5 justify-between items-center">
        <div className="flex flex-col gap-y-5 w-full ">
          <div className="flex w-full justify-between ">
            <h1 className="text-2xl font-semibold   ">Login</h1>
          </div>
          <TextField label="Email" type="email" />
          <TextField label="Password" type="password" />
        </div>

        <div className="flex w-full flex-col justify-center items-center gap-y-10">
          <Button
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
      </form>
    </AuthLayout>
  );
};

export default Login;
