import './App.css';
import react from 'react'
import styled from 'styled-components'
import Main from './components/main/main';
import Nav from './components/nav';
import {Route} from 'react-router-dom';
import Dogs from './components/dogs/dogs';
import DogDetails from './components/dogDetails/DogDetails';
import DogCreation from './components/dogCreation/dogCreation';
import Contact from './components/contact/contact';
import Theme from './Theme';
// const Title = styled.h1 `
//  color: ${state=> state.tono}
//   `;
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #dde;
  }
  `
function App() {
  return (
    <>
    <GlobalStyle />
    <Theme>
    <Nav></Nav>
    <div className="App">
      {/* <Title tono='#000fff'>Henry Dogs</Title> */}
     
      <Route exact path="/">
  
      <Main></Main>
      </Route>
      <Route  exact path="/dogs">
      
      <Dogs></Dogs>
      </Route>

        <Route exact path="/dogs/:id"
         render={({match})=>
          <DogDetails id={match.params.id}/>
        }/>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        
      <Route exact path="/dog">
        <DogCreation/>
      </Route>
     

    
       
    
    </div>
    </Theme>
    </>
  );
}

export default App;
