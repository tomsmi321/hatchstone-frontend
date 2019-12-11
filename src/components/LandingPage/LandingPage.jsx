import React, { useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../uiKit/Button';
import { ExampleContext } from '../../contexts/ExampleContext';
import { Background, BackgroundOverlay } from './Background';
import Typography from '../../uiKit/Typography';

export const LandingPage = () => {

  // Consuming context
  const exampleContextValue = useContext(ExampleContext);

  return(
    <>
    <Background>
      <BackgroundOverlay>
      <Typography variant="h2" align="center" color="default">
        Welcome to Hatchstone Client Onboarding
      </Typography>
      </BackgroundOverlay>
    </Background>
    <PrimaryButton variant="contained">
      {exampleContextValue.exampleValue}
    </PrimaryButton>
    </>
  )
}