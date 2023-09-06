import Register from "../views/Home";
import Signup from "../views/Auth/Signup";
import Login from "../views/Auth/Login";
//import Main from "../views/Main";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from '../layouts/PublicLayout'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout view={<Register />} />
    },
    {
        path: "/signup",
        element: <PublicLayout view={<Signup />} />
    },
    {
        path: "/login",
        element: <PublicLayout view={<Login />} />
    },
  ])