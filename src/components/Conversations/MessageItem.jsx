import React from 'react'
import styled from 'styled-components';
import { AccountCircle } from 'uiKit/Icon'
import { capitaliseString } from '../../utils/formatting-util';

const WrapperOuter = styled.div`
    /* background-color: teal; */
    margin: 0 9vw 19px 2.3vw;
    display: flex;
    justify-content: ${props => props.alignRight ? "flex-end" : "flex-start"};
    align-items: center;
`

const WrapperInner = styled.div`
    /* background-color: limegreen; */
    display: flex;
`

const WrapperMessageBox = styled.div`
    /* background-color: burlywood; */
    background-color: ${props => props.alignRight ? "#D6E2FF" : "#F2F5FC"} ;
    width: 18.5vw;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const WrapperMessageContent = styled.div`
    /* background-color: lightslategray; */
    padding: 15px 15px 0 15px;
    font-size: 14px;
`

const WrapperMessageTimeOuter = styled.div`
    /* background-color: lightyellow; */
    width: 18.5vw;
    display: flex;
    justify-content: flex-end;
`

const WrapperMessageTimeInner = styled.div`
    /* background-color: cadetblue; */
    margin: 3.5px 7px 7px 0;
    width: 60px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
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

const WrapperProfileImage = styled.div`
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 12px;
    display: ${props => props.alignRight ? "none" : ""};
`

const WrapperProfileImageFname = styled.div`
    /* background-color: wheat; */
    font-size: 12px;
`

const MessageItem = ({ message, currentUserId }) => {
    const { content, profileId, dateCreated, author } = message;

    const formatMessageTime = (dateCreated) => {
        const date = new Date(dateCreated)
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    const alignRight = () => {
        const authorId = author._id;
        if(authorId === currentUserId) {
            return true;
        }
    }

    return (
        <WrapperOuter alignRight={alignRight()}>
            <WrapperInner>
                <WrapperProfileImage alignRight={alignRight()}>
                    {profileId.profileImage ? <ProfileImage imageSrc={profileId.profileImage}/> : (
                        <AccountCircleIcon /> 
                    )}
                    <WrapperProfileImageFname>
                        {`${capitaliseString(profileId.firstName)}`}
                    </WrapperProfileImageFname>
                </WrapperProfileImage>
                <WrapperMessageBox alignRight={alignRight()}>
                    <WrapperMessageContent>
                        {content}
                    </WrapperMessageContent>
                    <WrapperMessageTimeOuter>
                        <WrapperMessageTimeInner>
                            {formatMessageTime(dateCreated)}
                        </WrapperMessageTimeInner> 
                    </WrapperMessageTimeOuter>
                </WrapperMessageBox>
            </WrapperInner>
        </WrapperOuter>
    ) 
}

export default MessageItem