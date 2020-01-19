import React, { useContext } from "react";
import styled from "styled-components";
import { TextField } from "../../uiKit/userInput/TextField";
import { PrimaryButton } from "../../uiKit/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DocumentField from "./DocumentField";
import { SelectInvestorType } from "../../uiKit/userInput/SelectInvestorType";
import { UserContext } from "../../contexts/UserContext";

const PageWrapper = styled.div`
  padding-bottom: 70px;
`;

const Wrapper = styled.div`
  /* background-color: lightsteelblue; */
  margin: 4.55vh auto 0vh auto;
  width: 57vw;
`;

const WrapperProfilePic = styled.div`
  /* background-color: lightgreen; */
  /* height: 17.8vh; */
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) =>
    `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 11.11vw;
  height: 17.8vh;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPhotoCameraIcon = styled(PhotoCameraIcon)`
  &&& {
    font-size: 50px;
    color: #ffffff;
  }
`;

const ProfileImageChangePicText = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const WrapperProfileDetailsUppper = styled.div`
  /* background-color: bisque; */
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`;

const WrapperTextFieldUpper = styled.div`
  width: 16.9vw;
`;

const WrapperProfileDetailsLower = styled.div`
  /* background-color: darkturquoise; */
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const WrapperTextFieldLower = styled.div`
  width: 26.5vw;
`;

const WrapperDocsFieldsOuter = styled.div`
  /* background-color: lightcoral; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const WrapperUpdateButton = styled.div`
  /* background-color: firebrick; */
  height: 35px;
  display: flex;
  justify-content: flex-end;
`;

const WrapperClientDocsField = styled.div`
  /* background-color: honeydew; */
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const WrapperClientDocsFieldDesc = styled.div`
  /* background-color: darkslateblue; */
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ClientDocField = ({ docType, docFileName, uri }) => {
  return (
    <WrapperClientDocsField>
      <WrapperClientDocsFieldDesc>{docType}</WrapperClientDocsFieldDesc>
    </WrapperClientDocsField>
  );
};

const EditProfileClientPage = props => {
  const { currentUserProfile } = useContext(UserContext);
  console.log(currentUserProfile);
  const {
    documents,
    firstName,
    lastName,
    email,
    address,
    investorType,
    profileImage,
    phone,
    userId
  } = currentUserProfile;
  console.log(documents);
  // const userId = profileDetails._id
  // const documents = profileDetails.documents
  const imageSrc = "https://devilsworkshop.org/wp-content/uploads/sites/8/2013/01/small-facebook-profile-picture.jpg";
  return (
    <PageWrapper>
      <Wrapper>
        <WrapperProfilePic>
          <ProfileImage imageSrc={imageSrc}>
            <StyledPhotoCameraIcon />
            <ProfileImageChangePicText>Change image</ProfileImageChangePicText>
          </ProfileImage>
        </WrapperProfilePic>
        <WrapperProfileDetailsUppper>
          <WrapperTextFieldUpper>
            <TextField
              key={firstName}
              defaultValue={firstName}
              size={"small"}
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              label="First name"
              type="text"
              name="firstName"
            />
          </WrapperTextFieldUpper>
          <WrapperTextFieldUpper>
            <TextField
              // having difficulty styling this without using inline styles
              key={lastName}
              defaultValue={lastName}
              size={"small"}
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              label="Last name"
              type="text"
              name="lastName"
            />
          </WrapperTextFieldUpper>
          <WrapperTextFieldUpper>
            <SelectInvestorType />
          </WrapperTextFieldUpper>
        </WrapperProfileDetailsUppper>
        <WrapperProfileDetailsLower>
          <WrapperTextFieldLower>
            <TextField
              // having difficulty styling this without using inline styles
              key={address}
              defaultValue={address}
              size={"small"}
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              label="Address"
              type="text"
              name="address"
            />
          </WrapperTextFieldLower>
          <WrapperTextFieldLower>
            <TextField
              // having difficulty styling this without using inline styles
              key={phone}
              defaultValue={phone}
              size={"small"}
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              label="Contact Number"
              type="text"
              name="phone"
            />
          </WrapperTextFieldLower>
        </WrapperProfileDetailsLower>
        <WrapperDocsFieldsOuter>
          {documents &&
            documents.map((document, i) => (
              <DocumentField key={i} document={document} profileId={currentUserProfile._id} />
            ))}
        </WrapperDocsFieldsOuter>
        <WrapperUpdateButton>
          <PrimaryButton>Update</PrimaryButton>
        </WrapperUpdateButton>
      </Wrapper>
    </PageWrapper>
  );
};

export default EditProfileClientPage;
