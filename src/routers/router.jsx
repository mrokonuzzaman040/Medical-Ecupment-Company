import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import HomeLayout from "../Home/HomeLayout";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import OurClients from "../Home/Clients/OurClients";
import ErrorPage from "../Error/ErrorPage";
import MachineDetails from "../MachineDetails/MachineDetails";
import BiochemistryReagents from "../ProductDetails/BiochemistryReagents";
import SerologyReagents from "../ProductDetails/SerologyReagents";
import ELISAReagents from "../ProductDetails/ELISAReagents";
import DeviceStrips from "../ProductDetails/DeviceStrips";
import ConsumableAccessories from "../ProductDetails/ConsumableAccessories";
import Layout from "../Admin/Dashboard/Layout";
import PrivateRoute from "./PrivateRoute";
import Login from "../Admin/Login/Login";

const router = createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/clients",
                element: <OurClients />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
            {
                path: "/product/:id",
                element: <MachineDetails />,
            },
            {
                path: "/biochemistryreagents",
                element: <BiochemistryReagents />,
            },
            {
                path: "/serologyreagents",
                element: <SerologyReagents />,
            },
            {
                path: "/elisareagents",
                element: <ELISAReagents />,
            },
            {
                path: "/deviceandstrips",
                element: <DeviceStrips />,
            },
            {
                path: "/consumableandaccessories",
                element: <ConsumableAccessories />,
            },
            {
                path: '/login',
                element: <Login />,
            },

        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Layout /> </PrivateRoute>,
        children: [
            {
                path: 'biochemistryreagents',
                element: <BiochemistryReagents />,
            },
            {
                path: 'serologyreagents',
                element: <SerologyReagents />,
            },
            {
                path: 'elisareagents',
                element: <ELISAReagents />,
            },
            {
                path: 'deviceandstrips',
                element: <DeviceStrips />,
            },
            {
                path: 'consumableandaccessories',
                element: <ConsumableAccessories />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ]
    }
] );

export default router;