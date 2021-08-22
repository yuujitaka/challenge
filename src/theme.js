import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d253f",
      light: "#01b4e4",
    },
    secondary: {
      main: "#90cea1",
    },
  },
  typography: {
    fontFamily: ["inherit"],
  },
});

export default theme;
