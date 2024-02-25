import * as React from "react";
import { config } from "../../config";
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Ourclients from "../webcomponents/Ourclients";
import Ourbranchs from "../webcomponents/Ourbranchs";
import Contact from "../webcomponents/Contact";
import Root from "../webcomponents/Root";
import Error from "../components/Error/Error";
import ProductsDetails from "../components/ProductsDetails/ProductsDetails";
import ProductsCategory from "../components/ProductsCategory/ProductsCategory";
import Layout from "../Admin/Dashboard/Layout";
import AddProduct from "../Admin/CRUD/AddProduct";
import EditProduct from "../Admin/CRUD/EditProduct";
import AllProducts from "../Admin/CRUD/Products/AllProducts";

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
            // Error page
            {
                path: "*",
                element: <Error />,
            },
            // Product page
            {
                path: "/product/:id",
                element: <ProductsDetails />,
                loader: async ( { params } ) => {
                    const product = config.productsContent.find( ( item ) => item.button.link === params.id );
                    return product;
                },
            },
            // Product category page
            {
                path: "/product-category/:category",
                element: <ProductsCategory />,
            },
            {
                path: 'dashboard',
                element: <Layout />,
                children: [
                    {
                        path: 'regent',
                        element: <AllProducts />,
                    },
                    {
                        path: 'error',
                        element: <Error />,
                    },
                ],
            }
        ],
    },
    {
        path: "*",
        element: <Error />,
    },

] );

export default router;
