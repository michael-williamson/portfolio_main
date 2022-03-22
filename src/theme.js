import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 420,
      tablet: 750,
      lg: 1000,
      xl: 1280,
      xxl: 1400,
    },
  },
  palette: {
    primary: {
      //blue like the water in background image
      main: "#0e2e5d",
    },
    secondary: {
      //white
      main: "#fff",
    },
    tertiary: {
      //orangish color & utilizing error color for extra colors
      main: "#bd3d09",
    },
    quaternary: {
      //yellowish color & utilizing info color for extra colors
      main: "#8D7209",
    },
    adjacentColor: {
      main: "#065a4a",
    },
    error: {
      //orangish color & utilizing error color for extra colors
      main: "#bd3d09",
    },
    info: {
      //yellowish color & utilizing info color for extra colors
      main: "#8D7209",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
