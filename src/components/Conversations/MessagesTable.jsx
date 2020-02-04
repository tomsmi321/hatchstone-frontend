import React, { useEffect } from 'react'
import styled from 'styled-components'
import NewMessage from './NewMessage'
import MessageItem from './MessageItem'

const Wrapper = styled.div`
  /* background-color: lightskyblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 87vh;
  width: 60vw;
  overflow: scroll;
`

const WrapperMessageItems = styled.div`
  /* background-color: darkslateblue; */
  margin-top: 60px;
`

const MessagesTable = ({
  currentMessages,
  currentMessagesLength,
  getCurrentMessages,
  currentUserId,
  createNewMessage,
  currentUserProfileId,
  currentConvoId,
  admin,
}) => {
  useEffect(() => {
    console.log('useEffect - MessagesTable')
    getCurrentMessages(currentConvoId)
  }, [currentMessagesLength])

  return (
    <Wrapper>
      <WrapperMessageItems>
        {currentMessages
          ? currentMessages.map((message, index) => {
              return (
                <MessageItem
                  key={index}
                  message={message}
                  currentUserId={currentUserId}
                />
              )
            })
          : null}

        {/* align right should be set to true if the message is from the current user */}
        {/* <MessageItem alignRight={true}/> */}
      </WrapperMessageItems>
      {currentConvoId ? (
         <NewMessage
         createNewMessage={createNewMessage}
         getCurrentMessages={getCurrentMessages}
         currentUserId={currentUserId}
         currentUserProfileId={currentUserProfileId}
         currentConvoId={currentConvoId}
         currentMessagesLength={currentMessagesLength}
       />
      ) : (null)}
     
    </Wrapper>
  )
}

export default MessagesTable
