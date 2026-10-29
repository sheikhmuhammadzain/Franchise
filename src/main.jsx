import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App.jsx";
import Login from "./Components/Login.jsx";
import AdminPage from "./Components/AdminPage.jsx";
import FranchisePage from "./Components/FranchisePage.jsx";
import Sales from "./Components/Sales.jsx";
import Tables from "./Components/Tables.jsx";
import TechnicalPage from "./Components/TechnicalPage.jsx";
import ProfileLogin from "./Components/ProfileLogin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/franchise",
    element: <FranchisePage />,
  },

  {
    path: "/AdminPanel",
    element: <AdminPage />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/tables",
    element: <Tables />,
  },
  {
    path: "/technical",
    element: <TechnicalPage />,
  },
  {
    path: "/profile",
    element: <ProfileLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
