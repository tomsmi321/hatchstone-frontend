import React, { useContext, useState, useEffect } from 'react'
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
    const { currentUserProfile } = useContext(UserContext);
    const { approved, firstName } = currentUserProfile;
    const [ showModal, setShowModal ] = useState(true);
    const [ userConvos, setUserConvos ] = useState([]);
   
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

    useEffect(() => {
        console.log('in useEffect - convo index');
        const userId = props.match.params.id;
        getUserConvos(userId);
    }, [])


    console.log('in convo page render', userConvos);
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
                        />
                        <MessagesTable 
                            userConvos={userConvos} 
                            admin={currentUserProfile.userId.admin}
                        />
                    </>
                ) : <LoadSpinner topMargin='38vh'/>
            }
           
        </Wrapper>
    )
}

export default ConversationsPage;