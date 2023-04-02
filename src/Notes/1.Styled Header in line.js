/** @format */

import "./App.css";
import styled from "styled-components";

const SytledHeader = styled.header`
  border: 1px solid gray;
  background-color: gray;
  color: white;
  font-size: xx-large;
  text-transform: uppercase;
  padding: 20px;
`;

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <SytledHeader>Styled Header component</SytledHeader>
      <button>click me</button>
    </div>
  );
}

export default App;
