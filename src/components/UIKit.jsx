import React from 'react';
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../uiKit/Button'
import { PrimaryLink, SecondaryLink } from '../uiKit/Link'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const UIKit = () => {
  return(
    <Wrapper>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <PrimaryLink >PrimaryLink</PrimaryLink>
      <SecondaryLink underline="always">SecondaryLink</SecondaryLink>
    </Wrapper>
  )
}

export default UIKit