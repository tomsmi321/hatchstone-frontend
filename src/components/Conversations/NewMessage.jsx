import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { TextArea } from '../../uiKit/userInput/TextArea';
import { PrimaryButton } from 'uiKit/Button'

const WrapperOuter = styled.div`
    /* background-color: blueviolet; */
    height: 30vh;
    display: flex;
    align-items: center;
`

const WrapperInner = styled.div`
    /* background-color: tan; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 0 2.3vh 2.3vw;
`

const StyledTextArea = styled(TextArea)`
    &&& {
        width: 48.5vw;
        height: 13vh;
        margin-bottom: 21px;
        font-size: 14px;
    }
`

const NewMessage = ({ createNewMessage, getCurrentMessages, currentMessagesLength, currentUserId, currentUserProfileId, currentConvoId }) => {
    const [ newMessageContent, setNewMessageContent ] = useState(null);

    const handleMessageChange = (e) => {
        console.log(e.target.value);
        setNewMessageContent(e.target.value);
    }

    const handleNewMessageSubmit = () => {
        console.log('in handle new message submit');
        createNewMessage(newMessageContent, currentUserId, currentUserProfileId, currentConvoId);
    }

    useEffect(() => {
        console.log('in useEffect - NewMessage');
        getCurrentMessages(currentConvoId);
    }, [currentMessagesLength])

    console.log('in new message state', newMessageContent);
    return (
    <WrapperOuter>
        <WrapperInner onChange={handleMessageChange}>
            <StyledTextArea placeholder="Type your message here..." />
            <PrimaryButton onClick={handleNewMessageSubmit}>Send</PrimaryButton>
        </WrapperInner>
    </WrapperOuter>
    )
}

export default NewMessage;