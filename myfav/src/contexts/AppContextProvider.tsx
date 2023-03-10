import { NullableContext, Context, User } from "models";
import React, { useState, createContext, useReducer } from "react";

export const AppContext = createContext<NullableContext<Context>>({});

const AppContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  return <AppContext.Provider value={{ user, setUser }} children={children} />;
};

export default AppContextProvider;
