import { createBrowserRouter } from "react-router";
import Code from "../view/Code";
import App from "../App";
import Setting from "../view/Setting";

export default createBrowserRouter([
    {
        path: "/",
        Component: App,
        loader: (arg, ctx) => {
            console.log(arg, ctx);
        },
        children: [
            {
                id: '代码',
                path: 'code',
                Component: Code
            },
            {
                id: '设置',
                path: 'setting',
                Component: Setting
            }
        ]
    },
]);