import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "./routers/Router";
import "./index.css";

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
