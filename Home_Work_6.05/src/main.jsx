import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header.jsx';
import About from './Pages/About/About.jsx';
import ModalInfo from './Pages/ModalInfo/ModalInfo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/modalInfo",
    element: <ModalInfo/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />.
  </React.StrictMode>
);
