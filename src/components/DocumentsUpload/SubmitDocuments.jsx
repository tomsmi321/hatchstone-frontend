import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FileUpload from "./UploadFile";
import styled from "styled-components";
import { PrimaryButton } from "../../uiKit/Button";
import { PrimaryLink, SecondaryLink } from "../../uiKit/Link";
import Stepper from "../../uiKit/Stepper";
import { UserContext } from "../../contexts/UserContext";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { AuthContext } from "../../contexts/AuthContext";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 25px; */
  font-size: 16px;
  align-items: center;
  width: 388px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  /* margin: 25px; */
`;

const Info = styled.div`
  font-size: 16px;
  align-items: center;
  /* margin: 25px; */
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
  max-width: 487px;
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
  const [profileId, setProfileId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const { currentUserProfile } = useContext(UserContext);

  const userId = props.match.params.id;

  console.log(currentUserProfile);

  useEffect(() => {
    setLoading(false);
    setProfileId(currentUserProfile._id);
  }, [currentUserProfile]);

  console.log(isLoading)

  console.log(profileId);

  return (
    <PageWrapper>
      <Stepper inputSteps={["Sign Up", "Create Profile", "Submit Documents"]} />
      <Container>
        <Title>Submit your documents</Title>
        <UploadWrapper>
          <TitleWrapper>
            <Label>Company Verification</Label>
            <Info>
              <HelpOutlineOutlinedIcon style={{ color: "lightgrey", margin: "5px" }} />
            </Info>
          </TitleWrapper>
          {/* <p>
            A certified copy of ASIC extract or their most recent company statement issued by ASIC showing all the
            company directors and members
          </p> */}
          <FileUpload profileId={profileId} documentId="Company Verification" />
          {/* <p>
            For each Director and Beneficial Owner of the company, a certified copy of their Australian driver's licence
            (front and back) that contains a photograph of the licence holder and displaying current residential address
          </p> */}
        </UploadWrapper>
        <UploadWrapper>
          <TitleWrapper>
            <Label>Director and Benefecial Owner Identifcation </Label>
            <Info>
              <HelpOutlineOutlinedIcon style={{ color: "lightgrey", margin: "5px" }} />
            </Info>
          </TitleWrapper>
          {/* <p>
            An accountant certificate under section 708(8) of the Corporations Act for the purpose of confirming their
            sophisticated investor status. The accountant certificate must contain the name of the accountant, the
            accountant'ss professional accounting body membership type and membership number, accountant's
            sign-off, and the date that the certificate was signed. Please note that accountant certificates are valid
            for 2 years from the date of signing.
          </p> */}
          <FileUpload profileId={profileId} documentId="Director and Benefecial Owner Identifcation" />
        </UploadWrapper>
        <UploadWrapper>
          <Label>Section 708 Wholesale Investor Certification</Label>
          <FileUpload profileId={profileId} documentId="Section 708 Wholesale Investor Certification" />
        </UploadWrapper>
        <ButtonWrapper>
          <PrimaryButton onClick={() => history.push(`/conversations/${userId}`)}>Submit</PrimaryButton>
        </ButtonWrapper>
        <PrimaryLink onClick={() => history.push(`/conversations/${userId}`)}>Skip</PrimaryLink>
      </Container>
    </PageWrapper>
  );
};

export default SubmitDocuments;
