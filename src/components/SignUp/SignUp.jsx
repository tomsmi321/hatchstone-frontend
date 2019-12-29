import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryLink } from 'uiKit/Link'
import { PrimaryButton } from 'uiKit/Button'
import { TextField } from 'uiKit/userInput/TextField'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 70px 50px 100px 50px;
  width: 40vw;
  margin: 150px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const HaveAnAccountText = styled.div`
  margin-right: 5px;
`

const LogInPrompt = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`

const TextFieldContainer = styled.div`
  margin: 16px 0;
  width: 100%;
`

const ButtonContainer = styled.div`
  margin: 28px 0px;
`

const SignUpPage = () => {
  const history = useHistory()
  return (
    <Container>
    <TextFieldContainer>
      <TextField label="Email" />
    </TextFieldContainer>
      <TextFieldContainer>
        <TextField label="Password" />
      </TextFieldContainer>
      <ButtonContainer>
        <PrimaryButton onClick={() => history.push("/create-profile")}>Sign up</PrimaryButton>
      </ButtonContainer>
      <PrimaryLink onClick={() => console.log('forgot password')}>
        Forgot password?
      </PrimaryLink>
      <LogInPrompt>
        <HaveAnAccountText>Already have an account?</HaveAnAccountText>
        <PrimaryLink onClick={() => history.push("/log-in")}>
          Log in
        </PrimaryLink>
      </LogInPrompt>
    </Container>
  )
}

export default SignUpPage