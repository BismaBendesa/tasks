import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Playlist from "./components/Playlist";
import SpotifyAPI from "./API/SpotifyAPI";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createMuiTheme } from "@mui/core/styles";
// import { MuiThemeProvider } from "@mui/styles";

// const THEME = createMuiTheme({
//   typography: {
//     fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
//     fontSize: 14,
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//   },
// });

function App() {
  return (
    // <MuiThemeProvider theme={THEME}>
    <div className="App">
      <Header />
      <Main />
      <Playlist />
      {/* <SpotifyAPI /> */}
    </div>
    // </MuiThemeProvider>
  );
}

export default App;
