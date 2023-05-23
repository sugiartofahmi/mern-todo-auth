import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/components/pages/Dashboard";
import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default Router;
