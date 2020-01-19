import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import FileUpload from "./UploadFile";
import styled from "styled-components";
import { PrimaryButton } from "../../uiKit/Button";
import { PrimaryLink } from "../../uiKit/Link";
import UserContextProvider from "../../contexts/UserContext";


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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 50px 100px 50px;
  width: 40vw;
  margin: 30px auto 0 auto;
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

const SubmitDocuments = props => {
  const history = useHistory();
  const profileId = props.match.params.id;

  return (
    <Container>
      <Title>Submit your documents</Title>
      <UploadWrapper>
        <Label>Approved Identification</Label>
        <FileUpload documentId="Approved Identification" />
      </UploadWrapper>
      <UploadWrapper>
        <Label>Proof of Address</Label>
        <FileUpload documentId="Proof of Address" />
      </UploadWrapper>
      
      <PrimaryButton onClick={() => history.push(`/conversations/${profileId}`)}>Submit</PrimaryButton>
      <PrimaryLink onClick={() => history.push(`/conversations/${profileId}`)}>Skip</PrimaryLink>
    </Container>
  );
};

export default SubmitDocuments;
