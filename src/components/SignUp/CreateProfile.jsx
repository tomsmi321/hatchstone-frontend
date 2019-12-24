import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryButton, TertiaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 36px 50px 100px 32px;
  width: 40vw;
  margin: 150px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`

const TextFieldContainer = styled.div`
  margin: 16px 0;
  width: 100%;
`

const ButtonContainer = styled.div`
  margin: 28px 0px;
`

const UploadPictureContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 18px;
`

const UploadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
    & > button {
      margin-right: 20px;
    }
`

const CreateProfilePage = () => {
  const history = useHistory()
  return (
    <Container>
    <Title>Please complete your profile</Title>
    <TextFieldContainer>
      <TextField labelValue="First Name" />
    </TextFieldContainer>
      <TextFieldContainer>
        <TextField labelValue="Last Name" />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField labelValue="Address" />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField labelValue="Contact Number" />
      </TextFieldContainer>
      <UploadPictureContainer>
        Profile Picture (optional)
        <UploadButtonContainer>
          <TertiaryButton>Choose File</TertiaryButton>
          No file chosen
        </UploadButtonContainer>
      </UploadPictureContainer>
      <ButtonContainer>
        <PrimaryButton>Submit</PrimaryButton>
      </ButtonContainer>
    </Container>
  )
}

export default CreateProfilePage