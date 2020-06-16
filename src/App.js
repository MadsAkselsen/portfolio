import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "components/sections/Header/Header";
import About from "components/sections/About/About";
import Projects from "components/sections/Projects/Projects";

const GlobalStyle = createGlobalStyle`
  body{
    min-height: 100vh;
    margin: 0;
    font-family: 'Montserrat';
    background: #252934;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
