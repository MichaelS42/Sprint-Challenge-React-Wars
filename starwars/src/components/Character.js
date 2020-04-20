// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    border: dashed #2196f3;
    margin 30px;
`;
function Character() {
    const [characterData, setCharacterData] = useState([])

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/character/[1,2,3,4]`)
        .then(response => {
            console.log(response.data)
            const rickMortySummer = response.data
            console.log(rickMortySummer)
            setCharacterData(rickMortySummer)
        })

    }, []);

    return (
        <div className="container">
            <Wrapper>
      <div className="entry">
        {characterData.map(item => {
          return <CharacterCard key={item.id} 
          name={item.name} 
          status={item.status} 
          species={item.species} 
          gender={item.gender} 
          origin={item.origin.name} 
          originUrl={item.origin.url}
          creation={item.created}
          image={item.image}/>;
        })}
      </div>
      </Wrapper>
    </div>
    )
}

export default Character;