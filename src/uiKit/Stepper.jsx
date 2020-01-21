import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";

const StyledStepper = styled(Stepper)`
  &&& {
    background-color: #fafafa;
    max-width: 520px;
    margin: 54px auto 43px;
    padding: 0px;
  }
`;

const getSteps = steps => {
  // Spread the props array that was passed in so the Stepper can be dynamic with amount of steps it displays whenever it is rendered
  // Allows Stepper to be a reusable component
  return [...steps];
};

export const StepA = ({ inputSteps, stepNumber }) => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const steps = getSteps(inputSteps);
  console.log(steps);
  console.log(stepNumber)
  return (
    <StyledStepper activeStep={stepNumber} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          {console.log()}
        </Step>
      ))}
    </StyledStepper>
  );
};
