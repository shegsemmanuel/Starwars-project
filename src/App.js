import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ROUTES} from "./utils/routes";

let router = createBrowserRouter(ROUTES);
 
export default () => <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
