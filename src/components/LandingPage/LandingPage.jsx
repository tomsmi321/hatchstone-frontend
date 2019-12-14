import React, { useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../uiKit/Button';
import { ExampleContext } from '../../contexts/ExampleContext';
import { Background, BackgroundOverlay } from './Background';
import Typography from '../../uiKit/Typography';
import MenuAppBar from '../../uiKit/navbars/topNavLoginDesktop'

export const LandingPage = () => {

  // Consuming context
  const exampleContextValue = useContext(ExampleContext);

  return(
    <>
      <Background>
        <BackgroundOverlay>
          <MenuAppBar />
          <Typography variant="h2" align="center" color="default">
            Welcome to Hatchstone Client Onboarding
          </Typography>
        </BackgroundOverlay>
      </Background>
      <PrimaryButton variant="contained" color="secondary">
        {exampleContextValue.exampleValue}
      </PrimaryButton>
    </>
  )
}