import './App.css';
import styled from 'styled-components';

const SytledHeader = styled.header`
border:1px solid gray;
background-color: gray;
color:white;
font-size: xx-large;
text-transform: uppercase;
padding: 20px;
`

function App() {
  return (
    <div className="App">
      <SytledHeader>Styled Header component</SytledHeader>
      <button>click me</button>
    </div>
  );
}

export default App;
