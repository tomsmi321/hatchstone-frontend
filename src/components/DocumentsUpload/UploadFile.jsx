import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import axios from '../../config/axiosConfig'

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles },
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {previews}

      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

      {files.length > 0 && submitButton}
    </div>
  )
}

const deleteDocument = async (params) => {
  const docFileName = document.fileName
  const id = params.userId
  console.log(docFileName)
  const response = await axios.post(`/profiles/${id}/delete-document`, {
    docFileName,
  })
  console.log(response)
}

const Preview = ({ meta }) => {
  const { name, percent, status } = meta
  console.log(meta)
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: '10px',
        fontFamily: 'Lato',
        background: '#E8EAF6',
        padding: '10px 20px',
        width: '95%',
        borderRadius: '4px',
      }}
    >
      <a
        href={document.url}
        target="_blank"
        rel="noopener noreferrer"
        download={document.fileName}
      >
        {' '}
        {document.fileName}
      </a>
      {name} <CloseIcon onClick={deleteDocument} />
    </span>
  )
}

const FileUpload = ({ documentId, userId }) => {
  console.log(documentId)
  console.log(userId)
  // console.log(profileId);

  const PreviewComponent = () => {
    return (
      <div>
        <p>{documentId}</p>
      </div>
    )
  }

  // specify upload params and url for your files
  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData()
    body.append('document', documentId)
    body.append('file', file)

    return {
      url: `http://localhost:5000/profiles/${userId}/uploadDocument`,
      // Looks like dropzone library is not working well with .env variables. See network tab for details.
      // url: `${process.env.REACT_APP_BACKEND_URL}profiles/${userId}/uploadDocument`,
      body,
    }
  }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file)
    if (status === 'done') {
      console.log('success')
    }
  }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta))
    allFiles.forEach((f) => f.remove())
  }

  return (
    <>
      <Dropzone
        label={documentId}
        className="dzu-dropzone"
        LayoutComponent={Layout}
        styles={{
          dropzone: {
            minHeight: 40,
            maxHeight: 200,
            border: 'none',
            overflow: 'visible',
            // padding: "5px",
            width: '398px',
          },
          inputLabel: {
            borderRadius: '4px',
            color: 'black',
            fontWeight: 'normal',
            fontFamily: 'Lato',
            border: '1px dashed #1A237E',
            background: 'white',
            padding: '1px',
            fontSize: '12px',
            width: '388px',
            maxWidth: '388px',
          },
          inputLabelWithFiles: {
            justifySelf: 'flex-start',
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            color: '#326FBB',
            fontWeight: 'normal',
            background: 'none',
            textDecoration: 'underline',
            padding: '0px',
            fontFamily: 'Lato',
            margin: '0px',
            marginRight: '20px',
          },
        }}
        inputLabel={`Upload ${documentId}`}
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        accept="image/*"
        multiple={true}
        maxFiles={5}
        PreviewComponent={Preview}
        canRemove={true}
      />
    </>
  )
}

export default FileUpload
