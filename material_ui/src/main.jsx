import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "blue",
          color: "white",
          padding: "8px 16px",
          borderRadius: 6,
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
