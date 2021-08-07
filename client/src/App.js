import './App.css';
import react from 'react'
import styled from 'styled-components'
import Main from './components/main/main';
import Nav from './components/nav';
// const Title = styled.h1 `
//  color: ${state=> state.tono}
//   `;

function App() {
  return (
    <>
    <Nav></Nav>
    <div className="App">
      {/* <Title tono='#000fff'>Henry Dogs</Title> */}
      <Main></Main>
    </div>
    </>
  );
}

export default App;
