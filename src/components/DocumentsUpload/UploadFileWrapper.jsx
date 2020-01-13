import React from "react";
import FileUpload from "./UploadFile";

const FileUploadWrapper = () => {
  return (
    <>
      <div className="fileUploadWrapper">
      <h3>Submit Your Documents</h3>
        <p>Approved Identification</p>
        <FileUpload documentId={"Approved Identification"} />
        <p>Proof of Address</p>
        <FileUpload documentId={"Proof of Address"} />
        <p>Accounting Statement</p>
        <FileUpload documentId={"Accounting Statement"} />
      </div>
    </>
  );
};

export default FileUploadWrapper;
