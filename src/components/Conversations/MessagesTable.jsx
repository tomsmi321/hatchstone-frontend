import React from 'react'
import styled from 'styled-components';
import { TextArea } from '../../uiKit/userInput/TextArea';
import { PrimaryButton } from 'uiKit/Button'
import { AccountCircle } from 'uiKit/Icon'

const Container = styled.div`
    /* background-color: lightskyblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    width: 60vw;
    overflow: scroll;
`

const MessagePartnerNameDiv = styled.div`
    /* background-color: thistle; */
    margin: 60px 0 4.8vh 2.3vw;
    font-weight: 900;
    font-size: 18px;
`

const MessageItemsContainer = styled.div`
    /* background-color: darkslateblue; */
`

const MessageItemOuterDiv = styled.div`
    /* background-color: teal; */
    margin: 0 9vw 19px 2.3vw;
    display: flex;
    align-items: center;
`

const MessageItemInnerDiv = styled.div`
    /* background-color: limegreen; */
    display: flex;
`

const MessageBox = styled.div`
    /* background-color: burlywood; */
    background-color: #F2F5FC;
    width: 18.5vw;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MessageContent = styled.div`
    /* background-color: lightslategray; */
    padding: 15px 15px 0 15px;
    font-size: 14px;
`

const MessageTimeOuterDiv = styled.div`
    /* background-color: lightyellow; */
    width: 18.5vw;
    display: flex;
    justify-content: flex-end;
`

const MessageTimeInnerDiv = styled.div`
    /* background-color: cadetblue; */
    margin: 0 7px 7px 0;
    width: 60px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
`

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 42 } })`
  color: rgba(0, 0, 0, 0.4);
`

const AccountCircleIconDiv = styled.div`
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 12px;
`

const AccountCircleIconFnameDiv = styled.div`
    /* background-color: wheat; */
    font-size: 12px;
`

const NewMessageOuterDiv = styled.div`
    /* background-color: blueviolet; */
    height: 30vh;
    display: flex;
    align-items: center;
`

const NewMessageInnerDiv = styled.div`
    /* background-color: tan; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 2.3vw;
`

const StyledTextArea = styled(TextArea)`
    &&& {
        width: 48.5vw;
        height: 13vh;
        margin-bottom: 21px;
        font-size: 14px;
    }
`

const MessagesTable = () => {
    return (
        <Container>
            <MessageItemsContainer>
                <MessagePartnerNameDiv>
                    Jack Greaves
                </MessagePartnerNameDiv>
                <MessageItemOuterDiv>
                    <MessageItemInnerDiv>
                        <AccountCircleIconDiv>
                            <AccountCircleIcon /> 
                            <AccountCircleIconFnameDiv>
                                Jack
                            </AccountCircleIconFnameDiv>
                        </AccountCircleIconDiv>
                        <MessageBox>
                            <MessageContent>
                                Good morning Lisa, how are you today? Could you please send through your documents for verification
                            </MessageContent>
                            <MessageTimeOuterDiv>
                                <MessageTimeInnerDiv>
                                    4:37pm
                                </MessageTimeInnerDiv> 
                            </MessageTimeOuterDiv>
                        </MessageBox>
                    </MessageItemInnerDiv>
                </MessageItemOuterDiv>
                {/* dddcd */}
                <MessageItemOuterDiv>
                    <MessageItemInnerDiv>
                        <AccountCircleIconDiv>
                            <AccountCircleIcon /> 
                            <AccountCircleIconFnameDiv>
                                Jack
                            </AccountCircleIconFnameDiv>
                        </AccountCircleIconDiv>
                        <MessageBox>
                            <MessageContent>
                                Please ensure they are certified.
                            </MessageContent>
                            <MessageTimeOuterDiv>
                                <MessageTimeInnerDiv>
                                    4:20pm
                                </MessageTimeInnerDiv> 
                            </MessageTimeOuterDiv>
                        </MessageBox>
                    </MessageItemInnerDiv>
                </MessageItemOuterDiv>
                {/* cdc */}
            </MessageItemsContainer>
            <NewMessageOuterDiv>
                <NewMessageInnerDiv>
                    <StyledTextArea placeholder="Type your message here..." />
                    <PrimaryButton>Send</PrimaryButton>
                </NewMessageInnerDiv>
            </NewMessageOuterDiv>
        </Container>
    )
}

export default MessagesTable;