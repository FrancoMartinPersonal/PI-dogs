import './App.css';
import react from 'react'
import styled from 'styled-components'
import Main from './components/main/main';
import Nav from './components/nav';
import {Route} from 'react-router-dom';
import Dogs from './components/dogs/dogs';
// const Title = styled.h1 `
//  color: ${state=> state.tono}
//   `;

function App() {
  return (
    <>
    <Nav></Nav>
    <div className="App">
      {/* <Title tono='#000fff'>Henry Dogs</Title> */}
      <Route exact path="/">
      <Main></Main>
      </Route>
      <Route  path="/dogs">
      <Dogs></Dogs>
      </Route>
    </div>
    </>
  );
}

export default App;
