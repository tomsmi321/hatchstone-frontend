import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from "react-router-dom";
import logo from '../../assets/hatchstoneAssets/hatchstone-logo-white.svg'
import { Link } from '@material-ui/core';
import { OUTER_APP_PATHS } from '../../common/constants'

const LOG_IN_PATH = "/log-in"
const SIGN_UP_PATH = "/sign-up"

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: transparent;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0px;
  top: 0px;
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

const LogInSignupContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BaseLink = styled(Link)`
  &&& {
    cursor: pointer;
    font-weight: bold;
  }
`

const SignUp = styled(BaseLink)`
  &&& {
    padding-right: 40px;
    color: #FFFFFF;
  }
`

const Login = styled(BaseLink)`
  &&& {
    color: #FFFFFF;
  }
`

const NavBar = () => {
  const { pathname } = useLocation()

  return (
  <Container>
    <Inner>
      <Logo/>
      <LogInSignupContainer>
        <SignUpLink />
        <LogInLink />
      </LogInSignupContainer>
    </Inner>
  </Container>
  )
}

const SignUpLink = () => {
  const history = useHistory()
  return (
    <SignUp onClick={() => history.push("/sign-up")}>
      Sign Up
    </SignUp>
  )
}

const LogInLink = () => {
  const history = useHistory()
  return (
    <Login onClick={() => history.push("/log-in")}>
      Login
    </Login>
  )
}

export default NavBar