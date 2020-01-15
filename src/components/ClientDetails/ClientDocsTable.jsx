import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GetAppIcon from '@material-ui/icons/GetApp';
import { PrimaryButton, SecondaryButton, ApprovedButton } from '../../uiKit/Button';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    /* background-color: lightskyblue; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const WrapperClientDocsFieldsOuter = styled.div`
    /* background-color: cadetblue; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 155px;
`

const WrapperClientDocsFieldsInner = styled.div`
    /* background-color: green; */
    width: 27vw;
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

const WrapperClientDocFieldDowloadField = styled.div`
    /* background-color: hotpink; */
    background-color: #E8EAF6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    height: 4vh;
    padding: 12px 25px;
    font-size: 14px;
    &:hover {
        cursor: pointer;
    }
`

const StyledGetAppIcon = styled(GetAppIcon)`
    &&& {
        font-size: 20px;
    }
`

const WrapperButtonsOuter = styled.div`
    /* background-color: wheat; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 48px;
`

const WrapperButtonsInner = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: flex-end;
    height: 35px;
`
const WrapperApproveButton = styled.div`
    /* background-color: firebrick; */
    display: flex;
    margin-right: 20px;
`

const WrapperSendMessageButton = styled.div`
    display: flex;
`

const StyledLink = styled(Link)`
    &&& {
        display: flex;
        text-decoration: none;
    }
`

const WrapperNoDocs = styled.div`
    background-color: #E8EAF6;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 155px;
    font-weight: bold;
    border-radius: 4px;
`


const ClientDocField = ({docType, docName}) => {

    const downLoadDoc = () => {
        console.log('downloading document');
    }

    return (
        <WrapperClientDocsField>
            <WrapperClientDocsFieldDesc>
                {docType}
            </WrapperClientDocsFieldDesc> 
            <WrapperClientDocFieldDowloadField onClick={downLoadDoc}>
                {docName}
                <StyledGetAppIcon />
            </WrapperClientDocFieldDowloadField>
        </WrapperClientDocsField>
    )
}


const ClientDocsTable = (props) => {
    const { documents, approved, userId } = props.client;
    const [ approveButtonDisabled, setApproveButtonDisabled ] = useState(false);
    const [ documentsActive, setDocumentsActive ] = useState(false);


    // refactor this later. This can be simplified
    useEffect(() => {
        console.log('in useEffect: ClientDocsTable ');
        if(documents) {
            if(documents.length === 0) {
                setDocumentsActive(false) 
                setApproveButtonDisabled(true);
            } else if(documents.length > 0) {
                setDocumentsActive(true) 
                setApproveButtonDisabled(false);
            }
        } else {
            setDocumentsActive(false) 
            setApproveButtonDisabled(false);
        }
    })

    const getDocType = (doc) => {
        // replace this with logic to parse a amazon s3 url
        return doc.split(',')[0];
    }

    const getDocName = (doc) => {
        // replace this with logic to parse a amazon s3 url
        return doc.split(',')[1];
    }

    return (
        <Wrapper>
            {documentsActive ? (
                <WrapperClientDocsFieldsOuter>
                    <WrapperClientDocsFieldsInner>
                        {documents.map((document, i) => 
                        <ClientDocField docType={getDocType(document)} 
                                        docName={getDocName(document)} 
                                        key={i}/>
                        )}
                    </WrapperClientDocsFieldsInner>
                </WrapperClientDocsFieldsOuter>
            ) : (
                <WrapperNoDocs>
                    {'No documents have been submitted'}
                </WrapperNoDocs>         
            )}  
            <WrapperButtonsOuter>
                <WrapperButtonsInner>
                    <WrapperApproveButton>
                        {approved ? <ApprovedButton>Approved</ApprovedButton> : 
                            <PrimaryButton disabled={approveButtonDisabled}>Approve</PrimaryButton>
                        }
                    </WrapperApproveButton>
                    <WrapperSendMessageButton>
                    {userId ? (
                        <StyledLink to={`/conversations/${userId._id}`}>
                            <SecondaryButton>Send a message</SecondaryButton>
                        </StyledLink>
                    ) : null }
                    </WrapperSendMessageButton>
                </WrapperButtonsInner>
            </WrapperButtonsOuter>
        </Wrapper>
    )
}

export default ClientDocsTable;