import React from 'react';
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
    &:hover {
        cursor: pointer;
    } 
        p {
            font-size: 14px;
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


const ClientDocField = ({fieldDesc, docTitle}) => {

    const dowloadDoc = () => {
        console.log('downloading document');
    }

    return (
        <WrapperClientDocsField>
            <WrapperClientDocsFieldDesc>
                {fieldDesc}
            </WrapperClientDocsFieldDesc> 
            <WrapperClientDocFieldDowloadField onClick={dowloadDoc}>
                <p>{docTitle}</p>
                <StyledGetAppIcon />
            </WrapperClientDocFieldDowloadField>
        </WrapperClientDocsField>
    )
}

const ClientDocsTable = () => {
    // remove all of these variable for demo purposes only, use context
    const approved = true;
    const fieldDesc1 = "Company verification"
    const docTitle1 = "company_verification.doc"
    const fieldDesc2 = "Owner identification"
    const docTitle2 = "id.png"
    const fieldDes3 = "Wholesaler investor certification"
    const docTitle3 = "certification.doc"

    return (
        <Wrapper>
            <WrapperClientDocsFieldsOuter>
                <WrapperClientDocsFieldsInner>
                    {/* need to use .map here */}
                    <ClientDocField fieldDesc={fieldDesc1} docTitle={docTitle1}/>
                    <ClientDocField fieldDesc={fieldDesc2} docTitle={docTitle2}/>
                    <ClientDocField fieldDesc={fieldDes3} docTitle={docTitle3}/>
                </WrapperClientDocsFieldsInner>
            </WrapperClientDocsFieldsOuter>
            <WrapperButtonsOuter>
                <WrapperButtonsInner>
                    <WrapperApproveButton>
                        {approved ? <ApprovedButton>Approved</ApprovedButton> : 
                        <PrimaryButton>Approve</PrimaryButton>}
                    </WrapperApproveButton>
                    <WrapperSendMessageButton>
                    <StyledLink to="/conversations/:id">
                        <SecondaryButton>Send a message</SecondaryButton>
                    </StyledLink>
                    </WrapperSendMessageButton>
                </WrapperButtonsInner>
            </WrapperButtonsOuter>
        </Wrapper>
    )
}

export default ClientDocsTable;