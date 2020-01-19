import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

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

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(getUsersStep(currentUser));
  // const { currentUserProfile } = useContext(UserContext)
  
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

  // function to check whether the user has satisfied moving on to the next step
  // const getUsersStep = () => {
  //   // if ('currentUser exist and currentUser\'s profile does not exist') {
  //   if (Object.keys(currentUser).length && !Object.keys(currentUserProfile).length) {
  //     return 'step 1'
  //   // } else if ('currentUser and currentUser\'s profile exist, but documents array does not equal total documents for user\'s respective investorType') {
  //   } else if (Object.keys(currentUser).length && Object.keys(currentUserProfile).length && currentUserProfile.documents) {
  //   return 'step 2'
  //   } else if ('currentUser and currentUser\'s profile exist and documents array equals total documents for user\'s respective investorType') {
  //     return 'step 3'
  //   } else {
  //   return 'step 0'
  //   }
  // }

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default HorizontalLabelPositionBelowStepper

