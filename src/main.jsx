import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.jsx';
import ForgotPassword from './Components/ForgotPassword.jsx';
import Login from './Components/Login.jsx';
import AddFranchisorForm from './Components/AddFranchisorForm.jsx';
import AdminPage from './Components/AdminPage.jsx';
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
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/form",
    element: <AddFranchisorForm />,
  },
  {
    path: "/AdminPanel",
    element: <AdminPage/>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
