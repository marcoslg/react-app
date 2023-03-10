import React from "react";
import "./App.module.scss";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import AppContextProvider from "contexts/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </AppContextProvider>
  );
}

export default App;
