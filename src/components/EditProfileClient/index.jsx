import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TextField } from "../../uiKit/userInput/TextField";
import { PrimaryButton } from "../../uiKit/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DocumentField from "./DocumentField";
import { SelectInvestorType } from "../../uiKit/userInput/SelectInvestorType";
import { UserContext } from "../../contexts/UserContext";
import axios from "../../config/axiosConfig";
import { useHistory } from "react-router-dom";
import AuthContextProvider from "../../contexts/AuthContext";
import UploadFile from "../DocumentsUpload/UploadFile";

const PageWrapper = styled.div`
  padding-bottom: 70px;
`;

const Wrapper = styled.div`
  margin: 4.55vh auto 0vh auto;
  width: 57vw;
`;

const WrapperProfilePic = styled.div`
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
  // const
  return (
    <WrapperClientDocsField>
      <WrapperClientDocsFieldDesc>Approved Identification</WrapperClientDocsFieldDesc>
      <UploadFile style={{width: "60px"}} />
    </WrapperClientDocsField>
  );
};

const EditProfileClientPage = props => {
  const history = useHistory();
  const { currentUserProfile } = useContext(UserContext);

  const [fields, setFields] = useState(null);
  const onChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setFields(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    setFields(currentUserProfile);
  }, [currentUserProfile]);

  const imageSrc = "https://devilsworkshop.org/wp-content/uploads/sites/8/2013/01/small-facebook-profile-picture.jpg";
  console.log(fields);
  if (currentUserProfile) {
    const { documents, firstName, lastName, address, investorType, profileImage, phone } = currentUserProfile;

    const handleSubmit = async e => {
      e.preventDefault();
      const { userId } = currentUserProfile;
      const response = await axios.put(`/profiles/updateByUser/${userId._id}`);
      console.log(response);
      history.push(`/profiles/conversations/${userId._id}`);
    };

    return (
      <PageWrapper>
        <form onSubmit={handleSubmit}>
          <Wrapper>
            <WrapperProfilePic>
              <ProfileImage imageSrc={imageSrc} onChange={onChange}>
                <StyledPhotoCameraIcon />
                <ProfileImageChangePicText>Change image</ProfileImageChangePicText>
              </ProfileImage>
            </WrapperProfilePic>
            <WrapperProfileDetailsUppper>
              <WrapperTextFieldUpper>
                <TextField
                  onChange={onChange}
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
                  onChange={onChange}
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
                <SelectInvestorType value={investorType} defaultValue={investorType} key={investorType} />
              </WrapperTextFieldUpper>
            </WrapperProfileDetailsUppper>
            <WrapperProfileDetailsLower>
              <WrapperTextFieldLower>
                <TextField
                  // having difficulty styling this without using inline styles
                  onChange={onChange}
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
                  onChange={onChange}
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
              {documents && documents.length > 0 ? (
                documents.map((document, i) => (
                  <DocumentField key={i} document={document} profileId={currentUserProfile._id} onChange={onChange} />
                ))
              ) : (
                <ClientDocField />
              )}
            </WrapperDocsFieldsOuter>
            <WrapperUpdateButton>
              <PrimaryButton type="submit">Update</PrimaryButton>
            </WrapperUpdateButton>
          </Wrapper>
        </form>
      </PageWrapper>
    );
  } else {
    return null;
  }
};

export default EditProfileClientPage;
