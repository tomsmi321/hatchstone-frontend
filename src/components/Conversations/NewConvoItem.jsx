import React from 'react'
import styled from 'styled-components'
import { AccountCircle } from 'uiKit/Icon'
import { capitaliseString } from '../../utils/formatting-util'
import { handleSendMessage as handleCreateNewConvo } from '../../utils/request-utils'

const WrapperOuter = styled.div`
  /* background-color: lightcyan; */
  background-color: #ffffff;
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
`

const AccountCircleIcon = styled(AccountCircle).attrs({
  style: { fontSize: 42 },
})`
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
  /* background-color: lightseagreen; */
  font-size: 14px;
  font-weight: 900;
`

const NewConvoItem = ({ userProfile, admin, currentUserProfile, setDisplayNewConvoItems, getUserConvos }) => {
  let clientUserProfile = null;
  let adminUserProfile = null;

  if(admin) {
    clientUserProfile = userProfile;
    adminUserProfile = currentUserProfile;
  } else {
    clientUserProfile = currentUserProfile;
    adminUserProfile = userProfile;
  }

  return (
    <WrapperOuter onClick={async () => {
        await handleCreateNewConvo(clientUserProfile, adminUserProfile);
        setDisplayNewConvoItems(false);
        getUserConvos(currentUserProfile.userId._id);
      }}>
        <WrapperInner>
            <WrapperProfilePicture>
                {userProfile.profileImage ? (
                    <ProfileImage imageSrc={userProfile.profileImage} />
                ) : (
                <AccountCircleIcon />
            )}
            </WrapperProfilePicture>
            <WrapperConvoContent>
                <WrapperConvoPartner>
                {`${capitaliseString(userProfile.firstName) + ' ' + capitaliseString(userProfile.lastName)}`}
                </WrapperConvoPartner>
            </WrapperConvoContent>
        </WrapperInner>
    </WrapperOuter>
  )
}

export default NewConvoItem
// onClick={() => {
//   handleSendMessage(clientUserProfile, adminUserProfile)
//   history.push(`/conversations/${adminUserProfile.userId._id}`)
// }}