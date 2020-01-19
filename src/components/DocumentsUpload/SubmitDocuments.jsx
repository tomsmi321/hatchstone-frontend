import React from "react";
import FileUpload from "./UploadFile";
import styled from "styled-components";
import { PrimaryButton } from "../../uiKit/Button";
import Typography from "../../uiKit/Typography";
import { PrimaryLink, SecondaryLink } from "../../uiKit/Link";
import Stepper from '../../uiKit/Stepper'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 37px 50px;
  max-width: 487px;
  margin: 0 auto 0;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const UploadWrapper = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  margin: 20px;
  flex-direction: column;
  align-items: flex-start;
`

const SubmitDocuments = (props) => {

  const profileId = props.match.params.id
  return (
    <>
      <Stepper inputSteps={['Sign Up', 'Create Profile', 'Submit Documents']}/>
      <Container>
        <h2>Upload Documents</h2>
        <p>Approved Identification</p>
        <FileUpload profileId={profileId} documentId={"Approved Identification"} label="Approved Identification" />
        <p>Proof of Address</p>
        <FileUpload profileId={profileId} documentId={"Proof of Address"} />
        <p>Accounting Statement</p>
        <FileUpload profileId={profileId} documentId={"Accounting Statement"} />
        <PrimaryButton>Submit</PrimaryButton>
        <PrimaryLink>Skip</PrimaryLink>
      </Container>
    </>
  );
};

export default SubmitDocuments;
