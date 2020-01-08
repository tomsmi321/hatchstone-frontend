import React from 'react'
import styled from 'styled-components';
import ConversationsTable from './ConversationsTable';
import MessagesTable from './MessagesTable';

// fix this
const Wrapper = styled.div`
  display: flex;
`

const ConversationsPage = () => {
    // TODO - consume context here

    return (
        <Wrapper>
            <ConversationsTable />
            <MessagesTable />
        </Wrapper>
    )
}

export default ConversationsPage;