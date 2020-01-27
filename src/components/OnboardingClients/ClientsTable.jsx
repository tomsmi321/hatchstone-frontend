import React from 'react'
import styled from 'styled-components'
import ClientItem from './ClientItem'

const Wrapper = styled.div`
  margin-top: 10px;
  text-align: left;
`
const WrapperHeader = styled.div`
  /* background-color: lightgreen; */
  padding: 16px 40px;
  background-color: #dedede;
  font-weight: bold;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
`
const WrapperClientHeading = styled.div`
  /* background-color: lightslategray; */
  width: 33.33%;
`

const WrapperProgressHeading = styled.div`
  /* background-color: lightpink; */
  width: 33.33%;
  text-align: center;
`

const ClientsTable = ({ clients }) => {
  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperClientHeading>Clients ({clients.length})</WrapperClientHeading>
        <WrapperProgressHeading>Application Progress</WrapperProgressHeading>
      </WrapperHeader>
      {clients.map((client, i) => (
        <ClientItem
          key={i}
          client={client}
          isLastItem={clients.length - 1 === i}
          appProgress={client.appProgress}
        />
      ))}
    </Wrapper>
  )
}

export default ClientsTable
