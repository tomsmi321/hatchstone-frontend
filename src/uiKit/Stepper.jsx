import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { AuthContext } from '../contexts/AuthContext'
import { useLocation } from 'react-router-dom';

const StyledStepper = styled(Stepper)`
  &&& {
    background-color: #FAFAFA;
    max-width: 520px;
    margin: 54px auto 43px;
    padding: 0px;
  }
`

const getSteps = (steps) => {
  // Spread the props array that was passed in so the Stepper can be dynamic with amount of steps it displays whenever it is rendered
  // Allows Stepper to be a reusable component
  return [...steps];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}


const HorizontalLabelPositionBelowStepper = ({ inputSteps }) => {
  const location = useLocation()
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
    // function to check whether the user has satisfied moving on to the next step base on the URL path
  const getUsersStep = (currentUser) => {
    console.log('HERRRREE')
    console.log(location.pathname)
    console.log('currentUser logged from Stepper', currentUser)
    console.log(location.pathname === `/submit-documents/${currentUser._id}`)
    if (location.pathname === '/create-profile') {
      return 0
    } else if (location.pathname === `/submit-documents/${currentUser._id}`) {
      return 1
    } else {
      return 'unknown stepIndex'
    }
  }

  const [activeStep, setActiveStep] = React.useState(getUsersStep(currentUser));
  
  const steps = getSteps(inputSteps);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StyledStepper activeStep={activeStep} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </StyledStepper>
  );
}

export default HorizontalLabelPositionBelowStepper

