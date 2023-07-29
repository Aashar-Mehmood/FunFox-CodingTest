import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import AuthProvider from "./context/AuthProvider";
import DataProvider from "./context/DataProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
