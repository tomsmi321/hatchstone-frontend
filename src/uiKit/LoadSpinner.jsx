import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Wrapper = styled.div`
    margin: 40vh auto;
    max-width: 1004px;
    text-align: center;
`;

export const LoadSpinner = () => {
    return (
        <Wrapper>
            <CircularProgress />
        </Wrapper>  
    )
};