import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AccountCircle } from 'uiKit/Icon'
import { capitaliseString } from '../../utils/formatting-util';

const WrapperOuter = styled.div`
    /* background-color: lightcyan; */
    background-color: #FFFFFF;
    width: 100%;
    margin-bottom: 17px;
    padding: 8px;
    &:hover {
        background-color: #ebebeb;
    } 
    &:active {
        background-color: #d4d4d4;
    }
`

const WrapperInner = styled.div`
    /* background-color: darksalmon; */
    width: 100%;
    height: 79px;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    &:hover {
        background-color: #ebebeb;
    } 
    &:active {
        background-color: #d4d4d4;
    }

`

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 42px;
  height: 42px;
  border-radius: 100px;
`;


const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 42 } })`
  color: rgba(0, 0, 0, 0.4);
`

const WrapperProfilePicture = styled.div`
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

const ConvoItem = ({ userConvo, admin, getCurrentMessages, currentMessagesLength, key }) => {
    const [ convoPartner, setConvoPartner ] = useState({});
    const [ convoSnippet, setConvoSnippet ] = useState(null);
    const [ convoLastMessageTime, setConvoLastMessageTime ] = useState(null);
    const convoPartnerProfileImg = userConvo.participants[0].profileImage;

    const getConvoPartner = (admin) => {
        console.log('in getConvoPartner - ConvoItem');
        const partnerIndex = admin ? 0 : 1;
        const convoPartner = userConvo.participants[partnerIndex];
        return convoPartner
    }

    const getConvoSnippet = (convo) => {
        console.log('in getConvoSnippet - ConvoItem');
        const messages = convo.messages;
        const lastMessage = messages[messages.length - 1];
        const convoSnippetResult = lastMessage.content;
        console.log('convoSnippetResult', convoSnippetResult);
        return convoSnippetResult;
    }

    const getConvoLastMessageTime = (convo) => {
        console.log('in getConvoLastMessageTime - ConvoItem');
        console.log('covo', convo);
        const messages = convo.messages;
        const lastMessage = messages[messages.length - 1];
        const { dateCreated } = lastMessage;
        const date = new Date(dateCreated)
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    const handleDisplayMessages = () => {
        console.log('in handleDisplayMessages - ConvoItem');
        const convoId = userConvo._id;
        const convoPartnerName = `${convoPartner.firstName} ${convoPartner.lastName}`
        getCurrentMessages(convoId, convoPartnerName);
    }

    useEffect(() => {
        console.log('in useEffect - ConvoItem');
        setConvoPartner( getConvoPartner(admin) )
        setConvoSnippet( getConvoSnippet(userConvo) );
        setConvoLastMessageTime( getConvoLastMessageTime(userConvo) )
    }, [userConvo])


    console.log('currentMessagesLength - ConvoItem', currentMessagesLength);
    return (
        <WrapperOuter onClick={handleDisplayMessages}>
            <WrapperInner>
                <WrapperProfilePicture>
                    {convoPartnerProfileImg ? <ProfileImage imageSrc={convoPartnerProfileImg}/> : (
                        <AccountCircleIcon />
                    )}
                </WrapperProfilePicture>
                <WrapperConvoContent>
                    {convoPartner.firstName && convoPartner.lastName ? (
                        <WrapperConvoPartner>
                            {`${capitaliseString(convoPartner.firstName) + ' ' + capitaliseString(convoPartner.lastName)}`}
                        </WrapperConvoPartner>
                    ) : (null)}
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