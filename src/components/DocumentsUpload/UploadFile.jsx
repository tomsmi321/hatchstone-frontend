import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import styled from "styled-components";
import Typography from "../../uiKit/Typography";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const FileUpload = params => {
  const documentId = params.documentId;
  const profileId = params.profileId;

  const PreviewComponent = () => {
    return (
      <div>
        <p>{documentId}</p>
      </div>
    );
  };

  // specify upload params and url for your files
  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData();
    body.append("document", documentId);
    body.append("file", file);

    return { url: `http://localhost:5000/profiles/${profileId}/uploadDocument`, body };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    if (status === "done") {
      console.log("success");
    }
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  return (
    <Dropzone
      label={documentId}
      className="dzu-dropzone"
      styles={{
        dropzone: {
          minHeight: 80,
          maxHeight: 200,
          border: "dashed 3px black",
          overflow: "visible",
          background: "#B8B8B8",
          padding: "2px"
        }
      }}
      inputlabel={`Upload ${documentId}`}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      // onSubmit={handleSubmit}
      accept="image/*"
      multiple={true}
      maxFiles={3}
      PreviewComponent={PreviewComponent}
    />
  );
};

export default FileUpload;
