import React from "react";
import FileUpload from "./UploadFile";
import styled from "styled-components";
import { PrimaryButton } from "../../uiKit/Button";
import Typography from "../../uiKit/Typography";
import { PrimaryLink, SecondaryLink } from "../../uiKit/Link";
import { UserProgressA } from "../../uiKit/UserProgress";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 70px 50px 100px 50px;
  width: 40vw;
  margin: 60px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`;
const UploadWrapper = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  margin: 20px;
  flex-direction: column;
  align-items: flex-start;
`;

const FileUploadWrapper = () => {
  return (
    <>
      <UserProgressA />
      <Container>
        <h2>Upload Documents</h2>
        <p>Approved Identification</p>
        <FileUpload documentId={"Approved Identification"} label="Approved Identification" />
        <p>Proof of Address</p>
        <FileUpload documentId={"Proof of Address"} />
        <p>Accounting Statement</p>
        <FileUpload documentId={"Accounting Statement"} />
        <PrimaryButton>Submit</PrimaryButton>
        <PrimaryLink>Skip</PrimaryLink>
      </Container>
    </>
  );
};

export default FileUploadWrapper;
