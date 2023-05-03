import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import AuthProvider from "./context/AuthContext";
import DataProvider from "./context/DataContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
