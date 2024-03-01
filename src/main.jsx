import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "./routers/Router";
import "./index.css";

import {
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from "./Auth/AuthProvider";

const queryClient = new QueryClient();

const rootElement = document.getElementById( "root" );
if ( rootElement ) {
  ReactDOM.createRoot( rootElement ).render(
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={ queryClient }>
          <div className="bg-white">
            <RouterProvider router={ router } />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}
