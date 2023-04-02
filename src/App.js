/** @format */

import "./App.css";
import InitComponent from "./components/InitComponent";
import { ThemeProvider } from "styled-components";

function App() {

 const darkTheme = {
  primary:"black",
  secondary:"white"
 }
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='App'>
        <InitComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
