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
  palette: {
    primary: {
      main: "#fb923c",
    },
    secondary: {
      main: "#0f766e",
    },
    customColor: {
      navy: "#0f172a",
    },
  },
});
// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         text: {
//           backgroundColor: "blue",
//           color: "white",
//           padding: "8px 16px",
//           borderRadius: 6,
//         },
//       },
//     },
//   },
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
