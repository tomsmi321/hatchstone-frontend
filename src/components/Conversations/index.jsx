import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import ConversationsTable from './ConversationsTable';
import MessagesTable from './MessagesTable';
import { LoadSpinner } from '../../uiKit/LoadSpinner';
import { SimpleModal } from '../../uiKit/Modal';
import { UserContext } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';

// fix this
const Wrapper = styled.div`
  display: flex;
`

const ConversationsPage = () => {
    // consume context
    const { currentUserProfile } = useContext(UserContext);
    const { approved, firstName } = currentUserProfile;
    const [ showModal, setShowModal ] = useState(true);

    const handModalClose = () => {
        setShowModal(false);
    }

    console.log('in convo page render');
    return (
        <Wrapper>
            {/* remove below, for testing UserContext only */}
            {Object.keys(currentUserProfile).length ? (
                    <>  
                        {!currentUserProfile.userId.admin ? (
                            <SimpleModal 
                            approved={approved} 
                            showModal={showModal}
                            handModalClose={handModalClose}
                            firstName={`${firstName[0].toUpperCase() + firstName.slice(1, firstName.length)}`}
                        />
                        ) : null }
                    
                        <ConversationsTable />
                        <MessagesTable />
                    </>
                ) : (<LoadSpinner />)
            }
           
        </Wrapper>
    )
}

export default ConversationsPage;