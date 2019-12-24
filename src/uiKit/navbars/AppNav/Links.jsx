import React from 'react'
import styled from 'styled-components'
import { PrimaryLink } from 'uiKit/Link'
import { useHistory } from "react-router-dom";

const LogInContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LogInText = styled.div`
  margin-right: 5px;
`

export const SignUpLink = () => {
  const history = useHistory()
  return (
    <PrimaryLink onClick={() => history.push("/sign-up")}>
      Sign Up
    </PrimaryLink>
  )
}

export const LogInLink = () => {
  const history = useHistory()
  return (
    <LogInContainer>
      <LogInText>
        Already have an account?
      </LogInText> 
    <PrimaryLink onClick={() => history.push("/log-in")}>
      Login
    </PrimaryLink>
    </LogInContainer>
  )
}

export const SignOutLink = () => {
  const history = useHistory()
  return (
    <PrimaryLink onClick={() => history.push("/")}>
      Sign out
    </PrimaryLink>
  )
}