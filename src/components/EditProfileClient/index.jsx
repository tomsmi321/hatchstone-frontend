import React from "react";
import styled from "styled-components";
import { TextField } from "../../uiKit/userInput/TextField";
import { PrimaryButton } from "../../uiKit/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const Wrapper = styled.div`
  background-color: lightsteelblue;
  margin: 4.55vh auto 0vh auto;
  width: 57vw;
  height: 74vh;
`;

const WrapperProfilePic = styled.div`
  background-color: lightgreen;
  height: 17.8vh;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  filter: grayscale(80%);
  width: 11.11vw;
  height: 17.8vh;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
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

const InputChangeProfilePic = styled.input``;

const WrapperProfileDetailsUppper = styled.div`
  background-color: bisque;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`;

const WrapperTextFieldUpper = styled.div`
  width: 16.9vw;
`;

const WrapperProfileDetailsLower = styled.div`
  background-color: darkturquoise;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const WrapperTextFieldLower = styled.div`
  width: 26.5vw;
`;

const WrapperDoumentFieldsUpper = styled.div`
  background-color: lightcoral;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const WrapperDoumentFieldsLower = styled.div`
  background-color: lightgoldenrodyellow;
  /* remove height */
  height: 9.7vh;
  margin-bottom: 60px;
  display: flex;
`;

const WrapperDocField = styled.div`
  background-color: lightgrey;
  width: 26.5vw;
`;

const WrapperDocFieldHeader = styled.div`
  background-color: royalblue;
  font-size: 14px;
`;

const WrapperDocFieldDropZone = styled.div`
  background-color: wheat;
  font-size: 14px;
  height: 5.55vh;
`;

const WrapperDocFieldFooter = styled.div`
  background-color: lightpink;
  font-size: 12px;
  color: #326fbb;
  float: right;
  text-decoration: underline;
`;

const WrapperUpdateButton = styled.div`
  background-color: firebrick;
  /* remove height */
  height: 35px;
  display: flex;
  justify-content: flex-end;
`;

const EditProfileClientPage = () => {
  const imageSrc = "https://devilsworkshop.org/wp-content/uploads/sites/8/2013/01/small-facebook-profile-picture.jpg";
  return (
    <Wrapper>
      {/* <label class="file">
                <input type="file" id="file" aria-label="File browser example"></input>
                    <span class="file-custom"></span>
           </label> */}
      <WrapperProfilePic>
        <ProfileImage imageSrc={imageSrc}>
          <StyledPhotoCameraIcon />
          <ProfileImageChangePicText>Change image</ProfileImageChangePicText>
        </ProfileImage>
      </WrapperProfilePic>
      <WrapperProfileDetailsUppper>
        <WrapperTextFieldUpper>
          <TextField
            // having difficulty styling this without using inline styles
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
            size={"small"}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            label="Last name"
            type="text"
            name="lastName"
          />
        </WrapperTextFieldUpper>
        <WrapperTextFieldUpper>
          <TextField
            // having difficulty styling this without using inline styles
            size={"small"}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            label="Change this to a select"
            type="text"
            name=""
          />
        </WrapperTextFieldUpper>
      </WrapperProfileDetailsUppper>
      <WrapperProfileDetailsLower>
        <WrapperTextFieldLower>
          <TextField
            // having difficulty styling this without using inline styles
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
            size={"small"}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            label="Contact Number"
            type="text"
            name="phone"
          />
        </WrapperTextFieldLower>
      </WrapperProfileDetailsLower>
      <WrapperDoumentFieldsUpper>
        <WrapperDocField>
          <WrapperDocFieldHeader>Company verification</WrapperDocFieldHeader>
          <WrapperDocFieldDropZone></WrapperDocFieldDropZone>
          <WrapperDocFieldFooter>Add another file</WrapperDocFieldFooter>
        </WrapperDocField>
        <WrapperDocField></WrapperDocField>
      </WrapperDoumentFieldsUpper>
      <WrapperDoumentFieldsLower>
        <WrapperDocField></WrapperDocField>
      </WrapperDoumentFieldsLower>
      <WrapperUpdateButton>
        <PrimaryButton>Update</PrimaryButton>
      </WrapperUpdateButton>
    </Wrapper>
  );
};

export default EditProfileClientPage;
