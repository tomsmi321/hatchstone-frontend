import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import "../App.css";
import styled from 'styled-components';
import Typography from '../../uiKit/Typography';

const FileUpload = params => {
  const documentId = params.documentId;
  const profileId = "5df1b006705587a1ff01cf3b";

  // specify upload params and url for your files
  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData();
    body.append("name", documentId + profileId);
    body.append("file", file);

    return { url: `http://localhost:5000/profiles/${profileId}/uploadProfileImage`, body };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  return (
    <Dropzone
      className="dzu-dropzone"
      styles={{ dropzone: { minHeight: 80, maxHeight: 200, border: "dashed 1px", overflow: "visible" } }}
      inputlabel={`Upload ${documentId}`}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
      multiple={false}
      maxFiles={1}
    />
  );
};

export default FileUpload;
