import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  fontColor: {
    importantText: orange[500],
  },
  overrides: {
    MuiMenu: {
      paper: {
        maxHeight: "60%",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
