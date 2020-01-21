import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchField } from 'uiKit/userInput/TextField'
import ClientsTable from './ClientsTable'
import { SimpleSelect } from '../../uiKit/SimpleSelect';
import { UsersContext } from '../../contexts/UsersContext';
import { LoadSpinner } from '../../uiKit/LoadSpinner';

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
  const { onboardingClients, getOnboardingClients, isLoading } = useContext(UsersContext);
  // setting initial state for the search term in SearchContainer
  const [searchState, setSearchState] = useState('');
  const [filter, setFilter] = React.useState('');

  useEffect(() => {
    console.log('in useEffect');
    getOnboardingClients();
  }, [])

  const handleSearchChange = (e) => {
    setSearchState(e.target.value);
  }

  const handleFilterChange = event => {
    console.log(event.target.value)
    setFilter(event.target.value);
  };


  // const filteredOnboardingClients = onboardingClients.filter(onboardingClients => {
  //   const clientFullName = `${onboardingClients.firstName + ' ' + onboardingClients.lastName}`
  //   return clientFullName.indexOf(searchState) !== -1;
  // });

  const searchClients = (searchTerm, clients) => {
    return clients.filter(client => {
      const clientFullName = `${client.firstName + ' ' + client.lastName}`
      return clientFullName.indexOf(searchTerm) !== -1;
    });
  } 


  const compareProgress = (clientA, clientB) => {
    if(clientA.appProgress > clientB.appProgress) {
      return -1;
    } else if(clientA.appProgress < clientB.appProgress) {
      return 1;
    } else if(clientA.appProgress === clientB.appProgress) {
      return 0;
    }
  }

  const sortClientsByProgress = (clients, compareProgress) => {
    return clients.sort(compareProgress)
  }

  const handleSearchAndFilter = (searchClients, sortClientsByProgress, searchTerm, clients, compareProgress, filter) => {
    const searchedClients = searchClients(searchTerm, clients);
    if(filter === 'Progress') {
      return sortClientsByProgress(searchedClients, compareProgress);
    } else {
      return searchedClients
    }
  }


    return (
      <>
        {!isLoading ? (
          <Wrapper>
              { onboardingClients.length ? (
                <>
                  <WrapperSearchAndFilterFields>
                    <SimpleSelect filter={filter} handleFilterChange={handleFilterChange}/>
                    <WrapperSearchField label="search" onChange={handleSearchChange}>
                      <SearchField placeholder="Search your clients" />
                    </WrapperSearchField>
                  </WrapperSearchAndFilterFields>
                  {/* <ClientsTable clients={searchClients(searchState, onboardingClients)} /> */}
                  {/* <ClientsTable clients={sortClientsByProgress(onboardingClients, compareProgress)} /> */}
                  <ClientsTable clients={handleSearchAndFilter(searchClients, sortClientsByProgress, searchState, onboardingClients, compareProgress, filter)} />
                </>
              ) : (
                <div>There are no approved clients</div>
              )}
          </Wrapper>) : (<LoadSpinner topMargin="38vh"/>)}
      </>
    )
      
}

export default OnboardingClientsPage;