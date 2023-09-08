import Register from "../views/Home";
import AdminLogin from "../views/Auth/AdminLog";
import Signup from "../views/Auth/Signup";
import Login from "../views/Auth/Login";
import History from "../views/History";
import Ended from "../views/Ended History"
import Start from "../views/Start"
import Chatbox from "../views/Chatbox"
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from '../layouts/PublicLayout';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout view={<Register />} />
        
    },
    {
        path: "/AdminLogin",
        element: <PublicLayout view={<AdminLogin />} />
        
    },
    {
        path: "/history",
        element: <PublicLayout view={<History />} />
    },
    {
        path: "/ended",
        element: <PublicLayout view={<Ended />}
         />
    },
    {
        path: "/start",
        element: <PublicLayout view={<Start />} />
    },
    {
        path: "/chatbox",
        element: <PublicLayout view={<Chatbox />} />
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