import React, { useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../uiKit/button';
import { ExampleContext } from '../../contexts/ExampleContext';

export const LandingPage = () => {

  // Consuming context
  const exampleContextValue = useContext(ExampleContext);

  return(
    <PrimaryButton variant="contained">
      `{exampleContextValue.exampleValue}`
    </PrimaryButton>
  )
}