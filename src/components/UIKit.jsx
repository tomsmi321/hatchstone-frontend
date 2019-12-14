import React from 'react';
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../uiKit/Button'
import Link from '../uiKit/Link'

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
      <Link >I am primary link</Link>
      <Link underline="always">I am secondary link</Link>
    </Wrapper>
  )
}

export default UIKit