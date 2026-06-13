import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";

export const router = createBrowserRoouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/users',
        element: <Register/>
    }
])


