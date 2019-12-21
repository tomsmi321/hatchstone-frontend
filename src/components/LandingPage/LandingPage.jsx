import React, { useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../uiKit/Button';
import { ExampleContext } from '../../contexts/ExampleContext';
import { Background, BackgroundOverlay } from './Background';
import { DarkFooter } from '../../uiKit/Footer'
import NavBar from '../../uiKit/navbars/LandingPageNav'

const Heading = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`

export const LandingPage = () => {

  // Consuming context
  const exampleContextValue = useContext(ExampleContext);

  return(
    <>
      <Background>
        <BackgroundOverlay>
          <NavBar />
          <Heading>
            Welcome to Hatchstone Client Onboarding
          </Heading>
          <DarkFooter />
        </BackgroundOverlay>
      </Background>
      {/* Example of pulling context values from consumed context
      <PrimaryButton variant="contained" color="secondary">
        {exampleContextValue.exampleValue}
      </PrimaryButton> */}
    </>
  )
}