import React, { useContext, useState, useEffect, Children } from 'react'
import styled from 'styled-components'
import ConversationsTable from './ConversationsTable'
import MessagesTable from './MessagesTable'
import { LoadSpinner } from '../../uiKit/LoadSpinner'
import { SimpleModal } from '../../uiKit/Modal'
import { UserContext } from '../../contexts/UserContext'
import axios from '../../config/axiosConfig'
import { capitaliseString } from '../../utils/formatting-util'

// fix this
const Wrapper = styled.div`
  display: flex;
`

const ConversationsPage = (props) => {
  // context
  const { currentUserProfile, getProfile } = useContext(UserContext)
  // approved / in-review modal states
  const [showModal, setShowModal] = useState(true)
  // conversation and message states
  const [userConvos, setUserConvos] = useState([])
  const [userConvosLength, setUserConvosLength] = useState(0)
  const [currentConvoId, setCurrentConvoId] = useState(null)
  const [currentMessages, setCurrentMessages] = useState([])
  const [currentMessagesLength, setCurrentMessagesLength] = useState(0)

  const handModalClose = () => {
    setShowModal(false)
  }

  const getUserConvos = async (userId) => {
    console.log('in getUserConvos - index')
    try {
      console.log('userId', userId)
      const result = await axios.get(`/conversations/findByUser/${userId}`)
      console.log('getUserCovosData \n', result.data)
      if (result.data) {
        setUserConvos(result.data)
        setUserConvosLength(result.data.length)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getCurrentMessages = async (convoId, name) => {
    console.log('in getCurrentMessages - index')
    try {
      if (convoId) {
        // get current messages is returning prior to create new message
        const result = await axios.get(
          `/messages/findByConversation/${convoId}`,
        )
        console.log('getCurrentMessages \n', result.data)
        if (result.data) {
          setCurrentMessages(result.data)
          setCurrentConvoId(convoId)
          setCurrentMessagesLength(result.data.length)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  // could set some state in here like a count then pass that down and listen for change
  // currentMessages length + 1
  const createNewMessage = async (content, userId, profileId, convoId) => {
    try {
      const response = await axios.post('/messages', {
        author: userId,
        profileId: profileId,
        conversationId: convoId,
        content: content,
      })
      if (response) {
        console.log('in createNewMessage - index')
        setCurrentMessagesLength((prevState) => prevState + 1)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log('in useEffect - index')
    const userId = props.match.params.id
    getUserConvos(userId)
    getProfile(userId)
  }, [currentMessagesLength, userConvosLength])

  console.log('currentMessagesLength - index', currentMessagesLength)
  console.log('currentUserProfile', currentUserProfile)
  return (
    <Wrapper>
      {/* remove below, for testing UserContext only */}
      {currentUserProfile && Object.keys(currentUserProfile).length ? (
        <>
          {!currentUserProfile.userId.admin ? (
            <SimpleModal
              approved={currentUserProfile.approved}
              showModal={showModal}
              handModalClose={handModalClose}
              firstName={capitaliseString(currentUserProfile.firstName)}
            />
          ) : null}

          <ConversationsTable
            userConvos={userConvos}
            admin={currentUserProfile.userId.admin}
            getCurrentMessages={getCurrentMessages}
            currentMessagesLength={currentMessagesLength}
          />
          <MessagesTable
            currentUserId={currentUserProfile.userId._id}
            currentUserProfileId={currentUserProfile._id}
            getCurrentMessages={getCurrentMessages}
            currentMessages={currentMessages}
            currentMessagesLength={currentMessagesLength}
            createNewMessage={createNewMessage}
            currentConvoId={currentConvoId}
            admin={currentUserProfile.userId.admin}
          />
        </>
      ) : (
        <LoadSpinner topMargin="38vh" />
      )}
    </Wrapper>
  )
}

export default ConversationsPage
