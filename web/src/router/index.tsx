import { createBrowserRouter } from "react-router";
import Home from "../view/Home";

export default createBrowserRouter([
    {
        path: "/",
        Component: Home,
        loader: (arg, ctx) => {
            console.log(arg, ctx);
        }
    },
]);