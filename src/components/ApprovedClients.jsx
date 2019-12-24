import React from 'react'
import styled from 'styled-components'
import { SearchField } from 'uiKit/userInput/TextField'

const Container = styled.div`
  margin: 60px auto 0px auto;
  max-width: 1004px;
`

const SearchContainer = styled.div`
  width: 33%;
`

const ApprovedClientsPage = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchField placeholder="Search your clients" />
      </SearchContainer>
    </Container>
  )
}

export default ApprovedClientsPage