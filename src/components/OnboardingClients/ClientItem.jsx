import React, { useState, useRef, useContext } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import DropdownMenu from 'uiKit/DropdownMenu'
import { ProgressBar } from 'uiKit/ProgressBar';
import { AccountCircle, MoreHoriz } from 'uiKit/Icon'
import { handleSendMessage } from '../../utils/request-utils';
import { UserContext } from '../../contexts/UserContext';

const Wrapper = styled.div`
  /* background-color: lightskyblue; */
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px 40px;
  background-color: #FFFFFF;
  border-bottom-left-radius: ${({ isLastItem }) => isLastItem && '4px'};
  border-bottom-right-radius: ${({ isLastItem }) => isLastItem && '4px'};
`

const WrapperClientInfo = styled.div`
  /* background-color: violet; */
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 33.33%;
`

const ProfileImage = styled.div`
  /* background-color: lightyellow; */
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-right: 20px;
`

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 42 } })`
  margin-left: -3px;
  margin-right: 17px;
  color: rgba(0, 0, 0, 0.4);
`

const MoreIcon = styled(MoreHoriz).attrs({ style: { fontSize: 30 } })`
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`
const WrapperMoreIcon = styled.div`
  /* background-color: lightyellow; */
  display: flex;
  justify-content: flex-end;
  width: 33%;
`

const WrapperProgressBar = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  width: 33.33%;
`

const ClientItem = ({ client, isLastItem, appProgress }) => {
    const [menuIsShowing, toggleMenuIsShowing] = useState(false)
    const { currentUserProfile } = useContext(UserContext);
    const menuIcon = useRef()
    const history = useHistory()
    const clientUserProfile = client;
    const adminUserProfile = currentUserProfile;


    const toggleShowMenu = () => toggleMenuIsShowing(!menuIsShowing)

    const clientName = `${client.firstName[0].toUpperCase() + 
                        client.firstName.slice(1, client.firstName.length)} 
                        ${client.lastName[0].toUpperCase() + 
                        client.lastName.slice(1, client.lastName.length)}`

    return (
        <Wrapper client={client} isLastItem={isLastItem}>
            <WrapperClientInfo>
                { client.profileImage ? <ProfileImage imageSrc={client.profileImage} /> : <AccountCircleIcon /> }
                { clientName } 
            </WrapperClientInfo>
            <WrapperProgressBar>
                <ProgressBar appProgress={appProgress}/>
            </WrapperProgressBar>
            <WrapperMoreIcon>
                <MoreIcon onClick={toggleShowMenu} ref={menuIcon} />
            </WrapperMoreIcon>
            <DropdownMenu
                anchorEl={menuIcon.current}
                isOpen={menuIsShowing}
                onClose={toggleShowMenu}
                menuItems={[
                  {
                      onClick: () => history.push(`/client-details/${client.userId._id}`),
                      label: 'View'
                  },
                  {
                    onClick: () => {
                      handleSendMessage(clientUserProfile, adminUserProfile);
                      history.push(`/conversations/${adminUserProfile.userId._id}`)
                    },
                    label: 'Send a message'
                  }
                ]}
            />
        </Wrapper>
    )
}

export default ClientItem;