import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SearchField } from 'uiKit/userInput/TextField'
import ClientsTable from './ClientsTable'
import { UsersContext } from '../../contexts/UsersContext';

const Container = styled.div`
  margin: 60px auto 0px auto;
  max-width: 1004px;
  text-align: center;
`

const SearchContainer = styled.div`
  width: 33%;
`

const ApprovedClientsPage = () => {
  // consume context 
  const { approvedClients, getApprovedClients } = useContext(UsersContext);
  // setting initial state for the search term in SearchContainer
  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    console.log('in useEffect');
    getApprovedClients();
  }, [])

  const handleSearchChange = (e) => {
    setSearchState(e.target.value);
    console.log(searchState);
  }

  const filteredApprovedClients = approvedClients.filter(approvedClient => {
    const clientFullName = `${approvedClient.firstName + ' ' + approvedClient.lastName}`
    return clientFullName.indexOf(searchState) !== -1;
  });

  return (
    <Container>
        { approvedClients.length ? (
          <>
            <SearchContainer label="search" onChange={handleSearchChange}>
              <SearchField placeholder="Search your clients" />
            </SearchContainer>
            <ClientsTable approvedClients={filteredApprovedClients} />
          </>
        ) : (
          <div>There are no approved clients</div>
        )}
    </Container>
  )
}

export default ApprovedClientsPage