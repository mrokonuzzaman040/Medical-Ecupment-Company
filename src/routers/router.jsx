import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Ourclients from "../webcomponents/Ourclients";
import Ourbranchs from "../webcomponents/Ourbranchs";
import Contact from "../webcomponents/Contact";
import Root from "../webcomponents/Root";

const router = createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Root />,
            },
            {
                path: "/ourclients",
                element: <Ourclients />,
            },
            {
                path: "/branches",
                element: <Ourbranchs />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
] );

export default router;
