import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { AccountCircle, MoreHoriz } from 'uiKit/Icon'
import DropdownMenu from 'uiKit/DropdownMenu'

const Container = styled.div`
  margin-top: 10px;
  text-align: left;
`

const Header = styled.div`
  padding: 16px 40px;
  background-color: #DEDEDE;
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
  background-color: #FFFFFF;
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

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 42 } })`
  margin-left: -3px;
  margin-right: 17px;
  color: rgba(0, 0, 0, 0.4);
`

const MoreIcon = styled(MoreHoriz).attrs({ style: { fontSize: 30 } })`
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`

const Client = ({ client, isLastItem }) => {
  const [menuIsShowing, toggleMenuIsShowing] = useState(false)
  const menuIcon = useRef()
  const history = useHistory()

  const toggleShowMenu = () => toggleMenuIsShowing(!menuIsShowing)

  return (
    <TableItem client={client} isLastItem={isLastItem}>
      <ClientInfo>
        { client.profile_photo ? <ProfileImage imageSrc={client.profile_photo} /> : <AccountCircleIcon /> }
        {`${client.first_name} ${client.last_name}`}
      </ClientInfo>
      <MoreIcon onClick={toggleShowMenu} ref={menuIcon} />
      <DropdownMenu
        anchorEl={menuIcon.current}
        isOpen={menuIsShowing}
        onClose={toggleShowMenu}
        menuItems={[
          {
            onClick: () => {console.log('go to Profile')},
            label: 'View'
          },
          {
            onClick: () => history.push(`/conversations/${client.id}`),
            label: 'Send a message'
          },
        ]}
      />
    </TableItem>
  )
}

const ClientsTable = ({ clients }) => {
  return (
    <Container>
      <Header>Clients ({clients.length})</Header>
      { clients.map((client, i) => <Client key={i} client={client} isLastItem={clients.length - 1 === i} />)}
    </Container>
  )
}

export default ClientsTable