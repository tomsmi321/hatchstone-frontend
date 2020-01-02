import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { ExpandMore, ExpandLess, AccountCircle } from 'uiKit/Icon'
import DropdownMenu from 'uiKit/DropdownMenu'

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
  const container = useRef()
  const [isExpanded, setIsExpanded] = useState(false)
  const history = useHistory()
  // override these
  const [firstname, lastname] = ["Jack", "Graves"]
  // const profilePhoto = null
  const profilePhoto = 'data:image/jpeg;base64,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'

  const toggleExpandMenu = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <>
      <Container ref={container} onClick={toggleExpandMenu}>
        { profilePhoto ? <ProfileImage imageSrc={profilePhoto} /> : <AccountCircle  style={{ fontSize: 36 }} />}
        <FullName>{`${firstname} ${lastname}`}</FullName>
        { isExpanded ? <ExpandLess/> : <ExpandMore />}
      </Container>
      <DropdownMenu
        anchorEl={container.current}
        isOpen={isExpanded}
        onClose={toggleExpandMenu}
        menuItems={[
          {
            onClick: () => {console.log('go to Profile')},
            label: 'Profile'
          },
          {
            onClick: () => history.push("/"),
            label: 'Logout'
          },
        ]}
      />
    </>
  )
}

export default ProfileDropdown