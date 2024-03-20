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
import BioReagent from "../Admin/Dashboard/Home/Products/BioReagent";
import SerReagent from "../Admin/Dashboard/Home/Products/SerReagent";
import ElsReagnt from "../Admin/Dashboard/Home/Products/ElsReagnt";
import Device from "../Admin/Dashboard/Home/Products/Device";
import CoaDevice from "../Admin/Dashboard/Home/Products/CoaDevice";
import MacDevice from "../Admin/Dashboard/Home/Products/MacDevice";
import MachineAndEquipment from "../Home/MachineAndEquipment";
import Shop from "../Home/Shop/Shop";
import AddShopProduct from "../Admin/Dashboard/Home/CRUD/AddShopProduct";
import ShopItemDetails from "../Home/Shop/ShopItemDetails";
import BuyNow from "../components/BuyNow";

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
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "itemDetails/:id",
                element: <ShopItemDetails />,
                loader: ( { params } ) => fetch( `https://api.khanbiotech.com/api/shopitems/${params.id}` )
            },
            {
                path: "buyNow/:id",
                element: <BuyNow />,
                loader: ( { params } ) => fetch( `https://api.khanbiotech.com/api/shopitems/${params.id}` )
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
                loader: ( { params } ) => fetch( `https://api.khanbiotech.com/api/machine/${params.id}` )
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
                path: "/machinesandequipment",
                element: <MachineAndEquipment />,
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
                element: <BioReagent />,
            },
            {
                path: 'serologyreagents',
                element: <SerReagent />,
            },
            {
                path: 'elisareagents',
                element: <ElsReagnt />,
            },
            {
                path: 'deviceandstrips',
                element: <Device />,
            },
            {
                path: 'consumableandaccessories',
                element: <CoaDevice />,
            },
            {
                path: 'machine',
                element: <MacDevice />,
            },
            {
                path: 'shop-item',
                element: <AddShopProduct />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ]
    }
] );

export default router;