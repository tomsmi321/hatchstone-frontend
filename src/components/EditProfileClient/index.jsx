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
import FileUpload from "../DocumentsUpload/UploadFileEdit";
import { InfoModal } from "../../uiKit/InfoModal";
import { AccountCircle } from "uiKit/Icon";


const PageWrapper = styled.div`
  padding-bottom: 70px;
`

const Wrapper = styled.div`
  margin: 4.55vh auto 0vh auto;
  width: 57vw;
`

const WrapperProfilePic = styled.div`
  /* background: blue; */
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 120 } })`
  color: rgba(0, 0, 0, 0.4);
`;

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) =>
    `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledPhotoCameraIcon = styled(PhotoCameraIcon)`
  &&& {
    font-size: 50px;
    color: #ffffff;
  }
`

const ProfileImageChangePicText = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
`

const WrapperProfileDetailsUpper = styled.div`
  /* background-color: bisque; */
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`

const WrapperTextFieldUpper = styled.div`
  width: 16.9vw;
`

const WrapperProfileDetailsLower = styled.div`
  /* background-color: darkturquoise; */
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`

const WrapperTextFieldLower = styled.div`
  width: 26.5vw;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 25px; */
  font-size: 16px;
  align-items: center;
  width: 300px;
`

const Info = styled.div`
  font-size: 16px;
  align-items: center;
  /* margin: 25px; */
`

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
`

const WrapperDocsFieldsOuter = styled.div`
  /* background-color: lightcoral; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const WrapperUpdateButton = styled.div`
  /* background-color: firebrick; */
  height: 35px;
  display: flex;
  justify-content: flex-end;
`

const WrapperClientDocsField = styled.div`
  /* background-color: honeydew; */
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const WrapperClientDocsFieldDesc = styled.div`
  /* background-color: darkslateblue; */
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

const CompanyVerificationDesc = () => {
  return (
    <i>
      {' '}
      A certified copy of an Australian Securities and Investments Commission
      extract or your most recent company statement issued by ASIC showing all
      company directors and members
    </i>
  )
}

const DirectorIdentificationDesc = () => {
  return (
    <i>
      For each Director and Beneficial Owner of the company, a certified copy of
      their Australian driver's licence (front and back) that contains a
      photograph of the licence holder and displaying current residential
      address
    </i>
  )
}

const WholeSaleInvestorCertDesc = () => {
  return (
    <i>
      An accountant certificate under section 708(8) of the Corporations Act for
      the purpose of confirming your sophisticated investor status. The
      accountant certificate must contain the name of the accountant, the
      accountant's professional accounting body membership type and membership
      number, accountant's sign-off, and the date that the certificate was
      signed. <br /> <br /> *Please note that accountant certificates are valid
      for 2 years from the date of signing.
    </i>
  )
}



const ClientDocFieldA = ({ userId }) => {
  console.log(userId)

  return (
    <WrapperClientDocsField>
      <TitleWrapper>
        <Label>Company Verification</Label>
        <Info>
          <InfoModal
            documentType="Company Verification"
            desc={<CompanyVerificationDesc />}
          />
        </Info>
      </TitleWrapper>

      <FileUpload
        userId={userId}
        documentId="Company Verification"
        style={{ width: '100px' }}
      />
    </WrapperClientDocsField>
  )
}
const ClientDocFieldB = ({ userId }) => {
  console.log(userId)

  return (
    <WrapperClientDocsField>
      <TitleWrapper>
        <Label>Director and Beneficial Owner Identification</Label>
        <Info>
          <InfoModal
            documentType="Director and Beneficial Owner Identification"
            desc={<DirectorIdentificationDesc />}
          />
        </Info>
      </TitleWrapper>
      <FileUpload
        userId={userId}
        documentId="Director and Beneficial Owner Identification"
        style={{ width: '100px' }}
      />
    </WrapperClientDocsField>
  )
}
const ClientDocFieldC = ({ userId }) => {
  console.log(userId)

  return (
    <WrapperClientDocsField>
      <TitleWrapper>
        <Label>Section 708 Wholesale Investor Certification</Label>
        <Info>
          <InfoModal
            documentType="Section 708 Wholesale Investor Certification"
            desc={<WholeSaleInvestorCertDesc />}
          />
        </Info>
      </TitleWrapper>
      <FileUpload
        userId={userId}
        documentId="Section 708 Wholesale Investor Certification"
        style={{ width: '100px' }}
      />
    </WrapperClientDocsField>
  )
}

const EditProfileClientPage = (props) => {
  const userId = props.match.params.id.trim()
  console.log(userId)
  const history = useHistory()
  const { currentUserProfile } = useContext(UserContext)

  const [fields, setFields] = useState(null)
  const onChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name
    setFields((prevState) => {
      return { ...prevState, [name]: value }
    })
  }


  useEffect(() => {
    setFields(currentUserProfile)
  }, [currentUserProfile])

  if (currentUserProfile) {
    const { documents, firstName, lastName, address, investorType, profileImage, phone } = currentUserProfile;
    console.log(currentUserProfile);


    const handleSubmit = async (e) => {
      e.preventDefault()

      const response = await axios.put(`/profiles/updateByUser/${userId}`, fields);
      const profile = response.data;
      console.log(profile);
      history.push(`/conversations/${userId}`);
    };

    const checkContainsDocType = (docType, docArr) => {
      console.log('in checkContainsDocType');
      for(let i = 0; i < docArr.length; i++) {
        console.log(docArr[i].name);
        console.log(docType); 
        if(docArr[i].name === docType) {
          return true
        } else {
          return false
        }
      }
    }

    console.log(documents);
    return (
      <PageWrapper>
        <form onSubmit={handleSubmit}>
          <Wrapper>
            <WrapperProfilePic>

            <ProfileImage imageSrc={profileImage}>
                <StyledPhotoCameraIcon />
                <ProfileImageChangePicText>Change profile image</ProfileImageChangePicText>{" "}
              </ProfileImage>
             
            </WrapperProfilePic>{" "}
            <p style={{ margin: "10px" }}>Profile Details</p>
            <WrapperProfileDetailsUpper>
              <WrapperTextFieldUpper>
                <TextField
                  onChange={onChange}
                  key={firstName}
                  defaultValue={firstName}
                  size={'small'}
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
                  size={'small'}
                  inputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  label="Last name"
                  type="text"
                  name="lastName"
                />
              </WrapperTextFieldUpper>
              <WrapperTextFieldUpper>
                <SelectInvestorType
                  value={investorType}
                  defaultValue={investorType}
                  key={investorType}
                />
              </WrapperTextFieldUpper>
            </WrapperProfileDetailsUpper>
            <WrapperProfileDetailsLower>
              <WrapperTextFieldLower>
                <TextField
                  // having difficulty styling this without using inline styles
                  onChange={onChange}
                  key={address}
                  defaultValue={address}
                  size={'small'}
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
                  size={'small'}
                  inputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  label="Contact Number"
                  type="text"
                  name="phone"
                />
              </WrapperTextFieldLower>
            </WrapperProfileDetailsLower>
            <p style={{ margin: "10px" }}>Documents</p>
            <WrapperDocsFieldsOuter>
              {documents ? (documents.map((document,index) => {
                  return <DocumentField document={document}  userId={userId} key={index}/>
                })) : (null) }

              {documents && checkContainsDocType("Company Verification", documents) === false ? (
                <ClientDocFieldA userId={userId}/>
              ) : (null)}

              {documents && checkContainsDocType("Director and Beneficial Owner Identification", documents) === false ? (
                <ClientDocFieldB userId={userId}/>
              ) : (null)}

              {documents && checkContainsDocType("Section 708 Wholesale Investor Certification", documents) === false ? (
                <ClientDocFieldC userId={userId}/>
              ) : (null)}
            </WrapperDocsFieldsOuter>
            <WrapperUpdateButton>
              <PrimaryButton type="submit">Update</PrimaryButton>
            </WrapperUpdateButton>
          </Wrapper>
        </form>
      </PageWrapper>
    )
  } else {
    return null
  }
}

export default EditProfileClientPage



{/* <WrapperDocsFieldsOuter>
{documents ? (documents.map((document,index) => {
  {console.log('in wrapper docs fields outer')}
  if(documents.length){
  if(document.name === "Company Verification"  || document.name === "Director and Beneficial Owner Identification"  || document.name === "Section 708 Wholesale Investor Certification"){
    
    return <DocumentField document={document}  userId={userId} key={index}/>
  } else if (documents.length < 3) {
    return <ClientDocFieldA userId={userId}/>
  }
} })
 ) : (null) }

</WrapperDocsFieldsOuter> */}