import React, { useState, useEffect } from "react";
import image from "./comp/image.jpeg";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`
body{ 
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"};
  color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")}
}
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h1>Trying!!!</h1>
          <h2>
            Fuck offfffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </h2>
          <button
            onClick={(e) =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            Toggle Theme
          </button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
