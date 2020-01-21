import React, { useState, useRef, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { ExpandMore, ExpandLess, AccountCircle } from 'uiKit/Icon'
import DropdownMenu from 'uiKit/DropdownMenu'
import { AuthContext } from '../../../contexts/AuthContext'
import { UserContext } from '../../../contexts/UserContext'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const FullName = styled.div`
  margin: 0px 8px;
`

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 36px;
  height: 36px;
  border-radius: 50px;
`

const ProfileDropdown = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const { currentUserProfile } = useContext(UserContext)
  const container = useRef()
  const [isExpanded, setIsExpanded] = useState(false)
  const history = useHistory()
  // override these
  console.log(currentUserProfile)
  // const [firstname, lastname] = ["Jack", "Graves"]
  // const {firstName, lastName } = currentUserProfile
  // const profilePhoto = null
  const profilePhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/850px-Missing_avatar.svg.png'
  const toggleExpandMenu = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <>
      <Container ref={container} onClick={toggleExpandMenu}>
        { profilePhoto ? <ProfileImage imageSrc={profilePhoto} /> : <AccountCircle  style={{ fontSize: 36 }} />}
        <FullName>{`${currentUser.email}`}</FullName>
        { isExpanded ? <ExpandLess/> : <ExpandMore />}
      </Container>
      <DropdownMenu
        anchorEl={container.current}
        isOpen={isExpanded}
        onClose={toggleExpandMenu}
        menuItems={[
          {
            onClick: () => {
              currentUser.admin ? history.push(`/edit-profile-admin/${currentUser._id}`) : history.push(`/edit-profile-client/${currentUser._id}`)
            },
            label: 'Profile'
          },
          {
            onClick: () => { logout() },
            label: 'Logout'
          },
        ]}
      />
    </>
  )
}

export default ProfileDropdown