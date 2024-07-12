import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import {router} from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-left" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
