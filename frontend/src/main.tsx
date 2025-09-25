import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

// Import CSS ها
import "./index.css";       // فایل Tailwind
import "./styles/theme.css"; // فایل custom شما

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
