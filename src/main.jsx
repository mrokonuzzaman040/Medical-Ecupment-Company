import * as React from "react";
import "./index.css";
import router from "./routers/router";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";

const rootElement = document.getElementById( "root" );
if ( rootElement ) {
  ReactDOM.createRoot( rootElement ).render(
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  );
}
