import React, { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AccountCircle, MoreHoriz } from 'uiKit/Icon'
import DropdownMenu from 'uiKit/DropdownMenu'
import { UserContext } from '../../contexts/UserContext'
import { handleSendMessage } from '../../utils/request-utils'

const Container = styled.div`
  margin-top: 10px;
  text-align: left;
`

const Header = styled.div`
  padding: 16px 40px;
  background-color: #dedede;
  font-weight: bold;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const TableItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 40px;
  background-color: #ffffff;
  border-bottom-left-radius: ${({ isLastItem }) => isLastItem && '4px'};
  border-bottom-right-radius: ${({ isLastItem }) => isLastItem && '4px'};
`

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-right: 20px;
`

const AccountCircleIcon = styled(AccountCircle).attrs({
  style: { fontSize: 42 },
})`
  margin-left: -3px;
  margin-right: 17px;
  color: rgba(0, 0, 0, 0.4);
`

const MoreIcon = styled(MoreHoriz).attrs({ style: { fontSize: 30 } })`
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`

const Client = ({ approvedClient, isLastItem }) => {
  const [menuIsShowing, toggleMenuIsShowing] = useState(false)
  const menuIcon = useRef()
  const history = useHistory()
  const { currentUserProfile } = useContext(UserContext)
  const clientUserProfile = approvedClient
  const adminUserProfile = currentUserProfile

  const toggleShowMenu = () => toggleMenuIsShowing(!menuIsShowing)

  const clientName = `${approvedClient.firstName[0].toUpperCase() +
    approvedClient.firstName.slice(1, approvedClient.firstName.length)} 
                      ${approvedClient.lastName[0].toUpperCase() +
                        approvedClient.lastName.slice(
                          1,
                          approvedClient.lastName.length,
                        )}`

  return (
    <TableItem approvedClient={approvedClient} isLastItem={isLastItem}>
      <ClientInfo>
        {approvedClient.profileImage ? (
          <ProfileImage imageSrc={approvedClient.profileImage} />
        ) : (
          <AccountCircleIcon />
        )}
        {clientName}
      </ClientInfo>
      <MoreIcon onClick={toggleShowMenu} ref={menuIcon} />
      <DropdownMenu
        anchorEl={menuIcon.current}
        isOpen={menuIsShowing}
        onClose={toggleShowMenu}
        menuItems={[
          {
            onClick: () =>
              history.push(`/client-details/${approvedClient.userId._id}`),
            label: 'View',
          },
          {
            onClick: () => {
              handleSendMessage(clientUserProfile, adminUserProfile)
              history.push(`/conversations/${adminUserProfile.userId._id}`)
            },
            label: 'Send a message',
          },
        ]}
      />
    </TableItem>
  )
}

const ClientsTable = ({ approvedClients }) => {
  console.log(approvedClients)
  return (
    <Container>
      <Header>Clients ({approvedClients.length})</Header>
      {approvedClients.map((approvedClient, i) => (
        <Client
          key={i}
          approvedClient={approvedClient}
          isLastItem={approvedClients.length - 1 === i}
        />
      ))}
    </Container>
  )
}

export default ClientsTable
