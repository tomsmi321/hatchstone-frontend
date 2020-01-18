import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AccountCircle } from 'uiKit/Icon'

const WrapperOuter = styled.div`
    /* background-color: lightcyan; */
    background-color: #FFFFFF;
    width: 100%;
    margin-bottom: 17px;
    padding: 8px;
`

const WrapperInner = styled.div`
    /* background-color: darksalmon; */
    width: 100%;
    height: 79px;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
`

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 42 } })`
  color: rgba(0, 0, 0, 0.4);
`

const WrapperAccountCircleIcon = styled.div`
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column; 
    justify-content: center;
    margin-right: 17px;
`

const WrapperConvoContent = styled.div`
    /* background-color: goldenrod; */
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const WrapperConvoPartner = styled.div`
    /* background-color: blue; */
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 11px;
`
const WrapperConvoSnippet = styled.div`
    /* background-color: peachpuff; */
    font-size: 12px;
    max-height: 16px;
    overflow: hidden;
`

const WrapperConvoTime = styled.div`
    /* background-color: crimson; */
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: flex-end;
    height: max-content;
`

const ConvoItem = ({ userConvo, admin }) => {
    const [ convoPartner, setConvoPartner ] = useState({});
    const [ convoSnippet, setConvoSnippet ] = useState(null);
    const [ convoLastMessageTime, setConvoLastMessageTime ] = useState(null);

    const getConvoPartner = (admin) => {
        const partnerIndex = admin ? 0 : 1;
        const convoPartner = userConvo.participants[partnerIndex];
        return convoPartner
    }

    const getConvoSnippet = (convo) => {
        const messages = convo.messages;
        const lastMessage = messages[messages.length - 1];
        const convoSnippetResult = lastMessage.content;
        return convoSnippetResult;
    }

    const getConvoLastMessageTime = (convo) => {
        const messages = convo.messages;
        const lastMessage = messages[messages.length - 1];
        const { dateCreated } = lastMessage;
        const date = new Date(dateCreated)
        return `${date.getHours()}:${date.getMinutes()}`;

    }

    useEffect(() => {
        setConvoPartner( getConvoPartner(admin) )
        setConvoSnippet( getConvoSnippet(userConvo) );
        setConvoLastMessageTime( getConvoLastMessageTime(userConvo) )
    }, [])

    console.log('time', convoLastMessageTime);


    console.log('convo item - convoPartner state', convoPartner);
    return (
        <WrapperOuter>
            <WrapperInner>
                <WrapperAccountCircleIcon>
                    <AccountCircleIcon />
                </WrapperAccountCircleIcon>
                <WrapperConvoContent>
                    <WrapperConvoPartner>
                        {`${convoPartner.firstName} ${convoPartner.lastName}`}
                    </WrapperConvoPartner>
                    <WrapperConvoSnippet>
                        {convoSnippet}
                    </WrapperConvoSnippet>
                </WrapperConvoContent>
                <WrapperConvoTime>
                        {convoLastMessageTime}
                </WrapperConvoTime>
            </WrapperInner>
        </WrapperOuter>
    )
}

export default ConvoItem;