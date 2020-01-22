import React from "react";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton, TertiaryButton, ApprovedButton } from "uiKit/Button";
import { PrimaryLink, SecondaryLink } from "uiKit/Link";
import { TextField } from "uiKit/userInput/TextField";
import { TextArea } from "uiKit/userInput/TextArea";
import { Footer, DarkFooter } from "uiKit/Footer";
import { SimpleModal } from "uiKit/Modal";
import { ProgressBar } from "uiKit/ProgressBar";
import { SimpleSelect } from "uiKit/SimpleSelect";
import DropdownMenu from 'uiKit/DropdownMenu';

import { StepA } from "uiKit/Stepper";
import SubmitDocuments from "./DocumentsUpload/SubmitDocuments";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  background-color: #fafafa;
`;

const UIKit = () => {
  return (
    <Wrapper>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <ApprovedButton>Approved</ApprovedButton>
      <PrimaryLink>PrimaryLink</PrimaryLink>
      <SecondaryLink underline="always">SecondaryLink</SecondaryLink>
      <TextField label="Input field"></TextField>
      <StepA inputSteps={["Sign Up", "Create Profile", "Submit Documents"]} />
      <TextArea placeholder="Type your message here..." />
      <SimpleModal />
      <Footer />
      <DarkFooter />
      <ProgressBar appProgress={25}/>
      <SimpleSelect />
    </Wrapper>
  );
};

export default UIKit;
