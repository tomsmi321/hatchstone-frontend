import React, { useContext } from 'react'
import styled from 'styled-components';
import ConversationsTable from './ConversationsTable';
import MessagesTable from './MessagesTable';
import { UserContext } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';

// fix this
const Wrapper = styled.div`
  display: flex;
`

const ConversationsPage = () => {
    // remove below, for testing UserContext only
    const { currentUserProfile } = useContext(UserContext);

    console.log('in convo page render');
    return (
        <Wrapper>
            {/* remove below, for testing UserContext only */}
            {Object.keys(currentUserProfile).length ? currentUserProfile.userId.email : 'false'}
            <ConversationsTable />
            <MessagesTable />
        </Wrapper>
    )
}

export default ConversationsPage;