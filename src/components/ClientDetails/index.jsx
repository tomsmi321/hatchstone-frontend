import React from 'react';
import styled from 'styled-components';
import ClientProfileTable from './ClientProfileTable'
import GetAppIcon from '@material-ui/icons/GetApp';
import { PrimaryButton, SecondaryButton } from '../../uiKit/Button';

const Wrapper = styled.div`
    /* background-color: lightgreen; */
    margin: 60px auto 0px auto;
    width: 58vw;
    height: 54vh;
    display: flex;
`

const WrapperClientDocs = styled.div`
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


const ClientDetailPage = () => {
    return (
        <Wrapper> 
            <ClientProfileTable />
            <WrapperClientDocs>
                <WrapperClientDocsFieldsOuter>
                    <WrapperClientDocsFieldsInner>
                        <WrapperClientDocsField>
                            <WrapperClientDocsFieldDesc>
                                {"Company verification"}
                            </WrapperClientDocsFieldDesc> 
                            <WrapperClientDocFieldDowloadField>
                                <p>{"company_verification.doc"}</p>
                                <StyledGetAppIcon />
                            </WrapperClientDocFieldDowloadField>
                        </WrapperClientDocsField>
                        {/* remove */}
                        <WrapperClientDocsField>
                            <WrapperClientDocsFieldDesc>
                                {"Owner identification"}
                            </WrapperClientDocsFieldDesc> 
                            <WrapperClientDocFieldDowloadField>
                                <p>{"id.png"}</p>
                                <StyledGetAppIcon />
                            </WrapperClientDocFieldDowloadField>
                        </WrapperClientDocsField>
                        {/* remove */}
                        <WrapperClientDocsField>
                            <WrapperClientDocsFieldDesc>
                                {"Wholesale investor certification"}
                            </WrapperClientDocsFieldDesc> 
                            <WrapperClientDocFieldDowloadField>
                                <p>{"certification.doc"}</p>
                                <StyledGetAppIcon />
                            </WrapperClientDocFieldDowloadField>
                        </WrapperClientDocsField>
                        {/* remove */} 
                    </WrapperClientDocsFieldsInner>
                </WrapperClientDocsFieldsOuter>
                <WrapperButtonsOuter>
                    <WrapperButtonsInner>
                        <WrapperApproveButton>
                            <PrimaryButton>Approve</PrimaryButton>
                        </WrapperApproveButton>
                        <SecondaryButton>Send a message</SecondaryButton>
                    </WrapperButtonsInner>
                </WrapperButtonsOuter>
            </WrapperClientDocs>
        </Wrapper>
    )
}

export default ClientDetailPage;