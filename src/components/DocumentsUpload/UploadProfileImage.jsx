import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Label = styled.div`
  font-size: 16px;
`;

const WrapperClientDocsField = styled.div`
  width: 100%;
  /* background-color: honeydew; */
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
const WrapperClientDocsFieldDesc = styled.div`
  /* background-color: darkslateblue; */
  font-size: 14px;
  margin-bottom: 8px;
`;

const WrapperClientDocFieldDownloadField = styled.div`
  /* background-color: hotpink; */
  background-color: #e8eaf6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  height: 5vh;
  padding: 12px 25px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;




export const UploadProfileImage = ({name, onChange, value, touched, errors, type}) => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    // console.log(props)
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <WrapperClientDocsField>
        <WrapperClientDocsFieldDesc>
          <Label> Profile Image(optional)</Label>
        </WrapperClientDocsFieldDesc>
        <WrapperClientDocFieldDownloadField>
          <div {...getRootProps()}>
            <input {...getInputProps()} name={name} onChange={onChange} value={value} touched={touched} errors={errors} />
            {isDragActive ? <p>Drop the files here ...</p> : <p>Select File</p>}
          </div>
        </WrapperClientDocFieldDownloadField>
      </WrapperClientDocsField>
    </>
  );
};
