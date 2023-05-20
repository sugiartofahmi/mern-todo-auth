import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../views/Home"));
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Router;
