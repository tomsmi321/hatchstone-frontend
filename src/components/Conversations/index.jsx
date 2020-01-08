import React from 'react'
import styled from 'styled-components';
import ConversationsTable from './ConversationsTable';
import MessagesTable from './MessagesTable';

// fix this
const Wrapper = styled.div`
  display: flex;
`

const ConversationsPage = () => {
    return (
        <Wrapper>
            <ConversationsTable />
            <MessagesTable />
        </Wrapper>
    )
}

export default ConversationsPage;