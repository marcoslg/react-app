import { AppContext } from "contexts/AppContextProvider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const RouteProtecter = (element: JSX.Element) => {
  //   const { user } = useContext(AppContext);
  //   if (user == null) {
  //     return <Navigate to="/" />;
  //   }
  return element;
};

export default RouteProtecter;
