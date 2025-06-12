import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTopOnRouteChange />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
