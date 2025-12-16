import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme.js";
import { ThemeProvider } from "@mui/material";
import EmployeesProvider from "./contexts/employeesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <EmployeesProvider>
        <CssBaseline />
        <App />
      </EmployeesProvider>
    </ThemeProvider>
  </StrictMode>
);
