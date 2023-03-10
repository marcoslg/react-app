import React from "react";
import { RouteObject } from "react-router-dom";
import App from "../templates/App/App";
import Home from "../views/Home";
import RouteProtecter from "./RouteProtecter";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact", element: RouteProtecter(<div> contact</div>) },
      { path: "*", element: <h2>404</h2> },
    ],
  },
];

export default routes;
