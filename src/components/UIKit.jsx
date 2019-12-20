import React from 'react';
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, TertiaryButton, ApprovedButton } from '../uiKit/Button'
// import { ApprovedButton } from '../uiKit/buttons/ApprovedButton'
import { PrimaryLink, SecondaryLink } from '../uiKit/Link'
import { TextField } from '../uiKit/userInput/TextField'
import { TextArea } from '../uiKit/userInput/TextArea'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    background-color: #FAFAFA;
`

const UIKit = () => {
  return(
    <Wrapper>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <ApprovedButton>Approved</ApprovedButton>
      <PrimaryLink >PrimaryLink</PrimaryLink>
      <SecondaryLink underline="always">SecondaryLink</SecondaryLink>
      <TextField labelValue="Input field"></TextField>
      <TextArea placeholder="Type your message here..."/>
    </Wrapper>
  )
}

export default UIKit