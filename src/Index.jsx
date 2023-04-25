import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import AuthProvider from "./context/authContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
