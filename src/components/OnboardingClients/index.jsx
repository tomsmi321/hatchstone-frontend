import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchField } from 'uiKit/userInput/TextField'
import ClientsTable from './ClientsTable'
import { SimpleSelect} from '../../uiKit/SimpleSelect';
import { UsersContext } from '../../contexts/UsersContext';

const Wrapper = styled.div`
  margin: 60px auto 0px auto;
  max-width: 1004px;
  text-align: center;
`

const WrapperSearchField = styled.div`
  width: 33%;
`

const WrapperSearchAndFilterFields =styled.div`
  display: flex;
  justify-content: space-between;
`

const OnboardingClientsPage = () => {
  // consume context
  const { onboardingClients, getOnboardingClients } = useContext(UsersContext);
  // setting initial state for the search term in SearchContainer
  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    console.log('in useEffect');
    getOnboardingClients();
  }, [])

  const handleSearchChange = (e) => {
    setSearchState(e.target.value);
    console.log(searchState);
  }

  const filteredOnboardingClients = onboardingClients.filter(onboardingClients => {
    const clientFullName = `${onboardingClients.firstName + ' ' + onboardingClients.lastName}`
    return clientFullName.indexOf(searchState) !== -1;
  });
      
    return (
        <Wrapper>
            { onboardingClients.length ? (
              <>
                <WrapperSearchAndFilterFields>
                  <SimpleSelect />
                  <WrapperSearchField label="search" onChange={handleSearchChange}>
                    <SearchField placeholder="Search your clients" />
                  </WrapperSearchField>
                </WrapperSearchAndFilterFields>
                <ClientsTable clients={filteredOnboardingClients} />
              </>
            ) : (
              <div>There are no approved clients</div>
            )}
        </Wrapper>
      )
}

export default OnboardingClientsPage;