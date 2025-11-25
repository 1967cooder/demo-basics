import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      //   main: "#1976d2",
      main: "#197",
      limeGreen: "#00FF00",
    },
    secondary: {
      main: "#dc004e",
    },

    limeGreen: {
      main: "#00FF00",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
export default theme;
