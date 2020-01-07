import React from 'react'
import styled from 'styled-components';
import ConversationsTable from './ConversationsTable';
import MessagesTable from './MessagesTable';

// fix this
const OuterContainer = styled.div`
  display: flex;
`

const ConversationsPage = () => {
    return (
        <OuterContainer>
            <ConversationsTable />
            <MessagesTable />
        </OuterContainer>
    )
}

export default ConversationsPage;