import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './Components/LoginPage.jsx';
import { DefaultSidebar } from './Components/DefaultSidebar.jsx';
 
import { ThemeProvider } from "@material-tailwind/react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultSidebar/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
