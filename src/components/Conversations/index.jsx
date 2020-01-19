import React, { useContext, useState, useEffect, Children } from 'react'
import styled from 'styled-components';
import ConversationsTable from './ConversationsTable';
import MessagesTable from './MessagesTable';
import { LoadSpinner } from '../../uiKit/LoadSpinner';
import { SimpleModal } from '../../uiKit/Modal';
import { UserContext } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';
import axios from '../../config/axiosConfig';

// fix this
const Wrapper = styled.div`
  display: flex;
`

const ConversationsPage = (props) => {
    // context
    const { currentUserProfile } = useContext(UserContext);
    // profile attributes of currentUser
    const { approved, firstName } = currentUserProfile;
    // approved / in-review modal states
    const [ showModal, setShowModal ] = useState(true);
    // conversation and message states
    const [ userConvos, setUserConvos ] = useState([]);
    const [ currentConvoPartner, setCurrentConvoPartner ] = useState(null);
    const [ currentMessages, setCurrentMessages ] = useState([]);
    const [ currentMessagesLength, setCurrentMessagesLength ] = useState(0);
    const [ currentConvoId, setCurrentConvoId ] = useState(null);
   

    const handModalClose = () => {
        setShowModal(false);
    }
    
    const getUserConvos = async (userId) => {
        console.log('in getUserConvos - convo index');
        try {
            const result = await axios.get(`/conversations/findByUser/${userId}`);
            console.log(result.data);
            if(result.data) {
                setUserConvos(result.data);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const getCurrentMessages = async (convoId, name) => {
        console.log('in getCurrentMessages - convo index');
        try {
            // get current messages is returning prior to create new message 
            const result = await axios.get(`/messages/findByConversation/${convoId}`);
            console.log(result.data);
            if(result.data) {
                setCurrentMessages(result.data);
                setCurrentConvoId(convoId);
                setCurrentConvoPartner(name);  
                setCurrentMessagesLength(result.data.length)
            }
        } catch(err) {
            console.log(err);
        }
    }


    // could set some state in here like a count then pass that down and listen for change
    // currentMessages length + 1 
    const createNewMessage = async (content, userId, profileId, convoId) => {
        try {
            const response = await axios.post('/messages', {
                author: userId,
                profileId: profileId,
                conversationId: convoId,
                content: content
            })
            if(response) {
                console.log('in create new message');
                setCurrentMessagesLength(currentMessagesLength + 1); 
            }
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        console.log('in useEffect - convo index');
        const userId = props.match.params.id;
        getUserConvos(userId);
    }, [])

    console.log('length in render', currentMessagesLength);
    return (
        <Wrapper>
            {/* remove below, for testing UserContext only */}
            { Object.keys(currentUserProfile).length ? (
                    <>  
                        {!currentUserProfile.userId.admin ? (
                            <SimpleModal 
                            approved={approved} 
                            showModal={showModal}
                            handModalClose={handModalClose}
                            firstName={`${firstName[0].toUpperCase() + firstName.slice(1, firstName.length)}`}
                        />
                        ) : null }
                    
                        <ConversationsTable 
                            userConvos={userConvos} 
                            admin={currentUserProfile.userId.admin}
                            getCurrentMessages={getCurrentMessages}
                        />
                        <MessagesTable 
                            currentUserId={currentUserProfile.userId._id}
                            currentUserProfileId={currentUserProfile._id}
                            getCurrentMessages={getCurrentMessages} 
                            currentMessages={currentMessages}
                            currentMessagesLength={currentMessagesLength}
                            currentConvoPartner={currentConvoPartner}
                            createNewMessage={createNewMessage}
                            currentConvoId={currentConvoId}
                        />
                    </>
                ) : <LoadSpinner topMargin='38vh'/>
            }
           
        </Wrapper>
    )
}

export default ConversationsPage;