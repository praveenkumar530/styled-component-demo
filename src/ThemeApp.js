/** @format */

import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";
import styled from "styled-components";

const StyledApp = styled.div`
  min-height: "100vh";
  text-align: "center";
  padding-top: "1rem";
  background-color: "#f5f5f5";
`;

function App() {
  return (
    <StyledApp>
      <h1>STYLED COMPONENTS</h1>

      <SunIcon />
      <Switch />
      <MoonIcon />
      <p>Theme Switching</p>
    </StyledApp>
  );
}

export default App;
