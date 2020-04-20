import React, { useEffect } from 'react';
import Character from './components/Character'

import styled from 'styled-components'

const WrapperBody = styled.section`
  width: 100%;
  
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    // useEffect(() => {
    //     axios
    //     .get(`https://rickandmortyapi.com/api/character/1,2,3`)
    //     .then(response => {
    //         console.log(response.data)
    //         (response.data)
    //     })

    // }, []);

  return (
      <WrapperBody>
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <Character> </Character>
    </div>
    </WrapperBody>
  );

}
export default App
