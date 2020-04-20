import React from "react";
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    
    
    border: dashed #2196f3;
    margin: 30px 30px 30px 300px;
`;
const Span = styled.span`
    margin: 15px 100px 15px 15px;
    background: #2196f3;
`;

const CharacterCard = props => {
    return (
        <div>
        <Wrapper>
            <img alt="rick and morty character" src={props.image} />
            <Span>
            
                <h1>{props.name}</h1>
                <h3>Species: {props.species}</h3>
                
            
                <h3>Gender: {props.gender}</h3>
                <h3>Origin: {props.origin}</h3>
                
                <h3>{props.originUrl}</h3>
                <h3>Status: {props.status}</h3>
                <h3>Created: {props.creation}</h3>
            </Span>
        </Wrapper>
        </div>
    )
}

export default CharacterCard