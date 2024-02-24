import * as React from "react";
import "./index.css";
import router from "./routers/router";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

const rootElement = document.getElementById( "root" );
if ( rootElement ) {
  ReactDOM.createRoot( rootElement ).render(
    <React.StrictMode>
      <QueryClientProvider client={ queryClient }>
        <RouterProvider router={ router } />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
