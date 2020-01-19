import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import FileUpload from "./UploadFile";
import styled from "styled-components";
import { PrimaryButton } from "../../uiKit/Button";
import { PrimaryLink } from "../../uiKit/Link";
import UserContextProvider from "../../contexts/UserContext";
import AppProgressB from "../../assets/images/progressBarTwo.svg";

const Title = styled.div`
  font-size: 16px;
  margin: 25px;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 13px;
  display: flex;
  justify-content: flex-start;
`;

const ButtonWrapper = styled.div`
  margin: 15px;
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 60px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
  width: 40vw;
  margin: 30px auto 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`;
const UploadWrapper = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitDocuments = props => {
  const history = useHistory();
  const profileId = props.match.params.id;

  return (
    <PageWrapper>
      <ProgressWrapper>
        <img src={AppProgressB} alt="not found" />
      </ProgressWrapper>
      <Container>
        <Title>Submit your documents</Title>
        <UploadWrapper>
          <Label>Approved Identification</Label>
          <FileUpload profileId={profileId} documentId="Approved Identification" />
        </UploadWrapper>
        <UploadWrapper>
          <Label>Proof of Address</Label>
          <FileUpload profileId={profileId} documentId="Proof of Address" />
        </UploadWrapper>
        <UploadWrapper>
          <Label>Accounting Statement</Label>
          <FileUpload profileId={profileId} documentId="Accounting Statement" />
        </UploadWrapper>
        <ButtonWrapper>
          <PrimaryButton onClick={() => history.push(`/conversations/${profileId}`)}>Submit</PrimaryButton>
        </ButtonWrapper>
        <PrimaryLink onClick={() => history.push(`/conversations/${profileId}`)}>Skip</PrimaryLink>
      </Container>
    </PageWrapper>
  );
};

export default SubmitDocuments;
