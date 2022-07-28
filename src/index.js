import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Store } from "./store/Context";
import { Router } from "./Router";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/appTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store>
      <ThemeProvider theme={appTheme}>
        <Router />
      </ThemeProvider>
    </Store>
  </React.StrictMode>
);
