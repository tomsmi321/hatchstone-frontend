import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #EEEEEE;
    position: relative;
    height: 0.6vh;
    width: 13.9vw;
    border-radius: 4px;
`
  
const WarrperFiller = styled.div`
    background-color: #326FBB;
    height: 100%;
    border-radius: inherit;
    width: ${props => props.width}%;
` 

const Filler = ({ appProgress }) => {
    return (
        <WarrperFiller width={appProgress}></WarrperFiller>
    )
}

export const ProgressBar = ({ appProgress }) => {
    return (
        <Wrapper>
            <Filler appProgress={appProgress}/>
        </Wrapper>
    )
}

