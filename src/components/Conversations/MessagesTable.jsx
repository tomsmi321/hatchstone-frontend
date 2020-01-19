import React, { useEffect } from 'react'
import styled from 'styled-components';
import NewMessage from './NewMessage';
import MessageItem from './MessageItem';

const Wrapper = styled.div`
    /* background-color: lightskyblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 87vh;
    width: 60vw;
    overflow: scroll;
`

const WrapperMessagePartnerName = styled.div`
    /* background-color: thistle; */
    margin: 60px 0 4.8vh 2.3vw;
    font-weight: 900;
    font-size: 18px;
`

const WrapperMessageItems = styled.div`
    /* background-color: darkslateblue; */
`

const MessagesTable = ({ currentMessages, currentMessagesLength, getCurrentMessages, currentUserId, currentConvoPartner, createNewMessage, currentUserProfileId, currentConvoId }) => {

    useEffect(() => {
        console.log('message table use effect');
        getCurrentMessages(currentConvoId);
    }, [currentMessagesLength])

    // console.log('current messages length from current messages obj ', currentMessages.length);
    // console.log('currentMessages length', currentMessagesLength);
    return (
        <Wrapper>
            <WrapperMessageItems>
                <WrapperMessagePartnerName>
                    {currentConvoPartner}
                </WrapperMessagePartnerName>
                {currentMessages ? currentMessages.map((message, index) => {
                    return (
                        <MessageItem 
                            key={index}
                            message={message} 
                            currentUserId={currentUserId}
                        />
                    )
                }) : null}
                
                {/* align right should be set to true if the message is from the current user */}
                {/* <MessageItem alignRight={true}/> */}
            </WrapperMessageItems>
            <NewMessage 
                createNewMessage={createNewMessage}
                getCurrentMessages={getCurrentMessages} 
                currentUserId={currentUserId}
                currentUserProfileId={currentUserProfileId}
                currentConvoId={currentConvoId}
                currentMessagesLength={currentMessagesLength}
            />
        </Wrapper>
    )
}

export default MessagesTable;