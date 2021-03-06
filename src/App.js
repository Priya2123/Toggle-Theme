import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
import style from "styled-theming";
import useTheme from "./useTheme";
import ToggleMode from "./ToggleMode";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});
const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE",
});
const getFontsize = style("textZoom", {
  normal: "1em",
  magnify: "1.2em",
});
const GlobalStyle = createGlobalStyle`
body{ 
  background-color: ${getBackground};
  color: ${getForeground};
  font-size: ${getFontsize};
}
`;

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h1>Trying!!!</h1>
          <h2>Lorem Ipsum Lorem Ipsum Lorem Ipsum</h2>
          <ToggleMode />
          <button
            onClick={(e) =>
              theme.setTheme(
                theme.textZoom === "normal"
                  ? { ...theme, textZoom: "magnify" }
                  : { ...theme, textZoom: "normal" }
              )
            }
          >
            Toggle Zoom
          </button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
