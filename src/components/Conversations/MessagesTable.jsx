import React from 'react'
import styled from 'styled-components';
import NewMessage from './NewMessage';
import MessageItem from './MessageItem';

const Wrapper = styled.div`
    /* background-color: lightskyblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
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

const MessagesTable = () => {
    return (
        <Wrapper>
            <WrapperMessageItems>
                <WrapperMessagePartnerName>
                    Ashley Thompson
                </WrapperMessagePartnerName>
                <MessageItem alignRight={false}/>
                {/* align right should be set to true if the message is from the current user */}
                <MessageItem alignRight={true}/>
            </WrapperMessageItems>
            <NewMessage />
        </Wrapper>
    )
}

export default MessagesTable;