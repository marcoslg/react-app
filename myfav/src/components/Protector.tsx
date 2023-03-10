import { AppContext } from "contexts/AppContextProvider";
import React, { useContext } from "react";

const Protector = ({ children }: any) => {
  const { user } = useContext(AppContext);
  if (user == null) {
    return <></>;
  }
  return children;
};

export default Protector;
