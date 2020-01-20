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

const NewMessage = ({ createNewMessage, currentUserId, currentUserProfileId, currentConvoId }) => {
    const [ newMessageContent, setNewMessageContent ] = useState('');

    const handleMessageChange = (e) => {
        console.log('in handleMessageChange - NewMessage');
        setNewMessageContent(e.target.value);
    }

    const handleNewMessageSubmit = (e) => {
        console.log('in handleNewMessageSubmit - NewMessage');
        createNewMessage(newMessageContent, currentUserId, currentUserProfileId, currentConvoId);
        setNewMessageContent('');
    }

    console.log('newMessageContent - NewMessage', newMessageContent);
    return (
    <WrapperOuter>
        <WrapperInner >
            <StyledTextArea placeholder="Type your message here..."  onChange={handleMessageChange} value={newMessageContent}/>
            <PrimaryButton onClick={handleNewMessageSubmit}>Send</PrimaryButton>
        </WrapperInner>
    </WrapperOuter>
    )
}

export default NewMessage;