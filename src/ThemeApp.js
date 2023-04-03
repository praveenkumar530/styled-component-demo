/** @format */

import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 1rem;
  background-color: ${(p) => p.theme.body};
  transition: all 0.7s ease;
`;

const StyledHeader = styled.h1`
  margin: 1rem;
  margin-bottom: 8rem;
  color: ${(props) => props.theme.title};
`;

const StyledInfo = styled.p`
  margin: 1rem;
  color: ${(props) => {
    console.log(props);
    return props.theme.subtitle;
  }};
`;

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon:"#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon:"#333",
};

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";


  const toggleTheme = () =>{
    setTheme(isDarkTheme?'light':'dark')
  }

  // setInterval(() => {
    // toggleTheme()
  // }, 2000);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <StyledHeader>STYLED COMPONENTS</StyledHeader>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        <StyledInfo>Theme Switching</StyledInfo>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
