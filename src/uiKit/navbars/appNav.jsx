import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from "react-router-dom";
import logo from '../../assets/hatchstoneAssets/hatchstone-logo-black.svg'
import { PrimaryLink } from '../Link'

const LOG_IN_PATH = "/log-in"
const SIGN_UP_PATH = "/sign-up"

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
`

const Inner = styled.div`
  margin: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Logo = styled.div`
  background-image: url("${logo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 37px;
  width: 197px;
`

const LogInContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LogInText = styled.div`
  margin-right: 5px;
`

const NavBar = () => {
  const { pathname } = useLocation()
  console.log('PATHNAME', pathname)
  return (
  <Container>
    <Inner>
      <Logo/>
      { pathname === LOG_IN_PATH && <SignUpLink /> }
      { pathname === SIGN_UP_PATH && <LogInLink /> }
    </Inner>
  </Container>
  )
}

const SignUpLink = () => {
  const history = useHistory()
  return (
    <PrimaryLink onClick={() => history.push("/sign-up")}>
      Sign Up
    </PrimaryLink>
  )
}

const LogInLink = () => {
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

export default NavBar