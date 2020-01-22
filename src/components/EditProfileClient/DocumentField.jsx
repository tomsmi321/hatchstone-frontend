import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import axios from "../../config/axiosConfig";
import UserContextProvider from "../../contexts/UserContext";

const Wrapper = styled.div`
  /* background-color: lightgrey; */
  width: 26.5vw;
  margin-bottom: 4.5vh;
`;

const WrapperDocFieldHeader = styled.div`
  /* background-color: royalblue; */
  font-size: 14px;
  margin-bottom: 5px;
`;

const WrapperDocFieldDropZone = styled.div`
  /* background-color: wheat; */
  font-size: 14px;
  height: 5.55vh;
`;

const WrapperDocFieldFooter = styled.div`
  /* background-color: lightpink; */
  font-size: 12px;
  color: #326fbb;
  float: right;
  text-decoration: underline;
`;
const WrapperClientDocFieldDownloadField = styled.div`
  /* background-color: hotpink; */
  background-color: #e8eaf6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  height: 6vh;
  padding: 12px 25px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const DocumentField = ({ document, userId }) => {
  console.log(userId)
  const currentUserProfile = useContext(UserContextProvider);
  console.log(currentUserProfile);

  useEffect(() => {}, [document]);

  const deleteDocument = async () => {
    const docFileName = document.fileName;

    const response = await axios.post(`/profiles/${userId}/delete-document`, { docFileName }) 
  };
  return (
    <Wrapper>
      <WrapperDocFieldHeader>{document.name}</WrapperDocFieldHeader>
      <WrapperClientDocFieldDownloadField>
        <a
          href={document.url}
          target="_blank"
          rel="noopener noreferrer"
          download={document.fileName}
          userid={userId}
        >
          {" "}
          {document.fileName}
        </a>
        <CloseIcon onClick={deleteDocument} />
      </WrapperClientDocFieldDownloadField>

      <WrapperDocFieldFooter>Add another file</WrapperDocFieldFooter>
    </Wrapper>
  );
};

export default DocumentField;
