import React from 'react';
import styled from 'styled-components';
import ClientProfileTable from './ClientProfileTable'
import ClientDocsTable from './ClientDocsTable';

const Wrapper = styled.div`
    /* background-color: lightgreen; */
    margin: 60px auto 0px auto;
    width: 58vw;
    height: 54vh;
    display: flex;
`

const ClientDetailPage = () => {
    return (
        <Wrapper> 
            <ClientProfileTable />
            <ClientDocsTable />
        </Wrapper>
    )
}

export default ClientDetailPage;