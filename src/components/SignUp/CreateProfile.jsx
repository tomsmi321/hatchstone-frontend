import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'
import { UploadPictureField } from 'uiKit/UploadPictureField';

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

const CreateProfilePage = () => {
  const history = useHistory()
  return (
    <Container>
    <Title>Please complete your profile</Title>
    <TextFieldContainer>
      <TextField label="First Name" />
    </TextFieldContainer>
      <TextFieldContainer>
        <TextField label="Last Name" />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField label="Address" />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField label="Contact Number" />
      </TextFieldContainer>
      <UploadPictureField />
      <ButtonContainer>
        <PrimaryButton>Submit</PrimaryButton>
      </ButtonContainer>
    </Container>
  )
}

export default CreateProfilePage