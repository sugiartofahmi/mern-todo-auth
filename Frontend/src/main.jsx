import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import { RouterProvider } from "react-router";
import Router from "@/router";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={Router} />
    </RecoilRoot>
  </StrictMode>
);
