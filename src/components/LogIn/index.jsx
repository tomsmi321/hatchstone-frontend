import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { PrimaryLink } from '../../uiKit/Link'

const Container = styled.div`
  padding: 70px 50px 100px 50px;
  width: 40vw;
  margin: 150px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const LogInPage = () => {
  const history = useHistory()
  return (
    <Container>
      No account?
      <PrimaryLink onClick={() => history.push("/sign-up")}>
        Create account
      </PrimaryLink>
    </Container>
  )
}

export default LogInPage