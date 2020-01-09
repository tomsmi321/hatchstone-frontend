import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: lightgreen;
    margin: 60px auto 0px auto;
    width: 58vw;
    height: 54vh;
    display: flex;
`

const WrapperClientProfile = styled.div`
    background-color: lightpink;
    width: 50%;
    display: flex;
    flex-direction: column;
`

const WrapperAccountCircleIcon = styled.div`
    background-color: lightcoral;
    /* remove height and width */
    height: 120px;
`
const WrapperClientProfileDetails = styled.div`
    background-color: violet;
    /* remove height */
    height: 300px;
`

const WrapperClientDocs = styled.div`
    background-color: lightskyblue;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const WrapperClientDocsFields = styled.div`
    background-color: cadetblue;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 170px;
    margin-top: 120px;
`

const WrapperButtonsOuter = styled.div`
    background-color: wheat;
    height: 170px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    /* align-items: flex-end; */
`

const WrapperButtonsInner = styled.div`
    background-color: red;
    height: 50px;
    width: 300px;
`

const WrapperClientDocsField = styled.div`
    background-color: honeydew;
    display: flex;
    flex-direction: column;
    height: 40px;
    width: 300px;
    margin-bottom: 10px;
`
const WrapperClientDocsFieldDesc = styled.div`
    background-color: indigo;
    height: 10px;
`

const WrapperClientDocFieldDowloadField = styled.div`
    background-color: hotpink;
    width: 300px;
    height: 20px;
`


const ClientDetailPage = () => {
    return (
        <Wrapper> 
            <WrapperClientProfile>
                <WrapperAccountCircleIcon> 

                </WrapperAccountCircleIcon>
                <WrapperClientProfileDetails> 

                </WrapperClientProfileDetails>
            </WrapperClientProfile>
            <WrapperClientDocs>
                <WrapperClientDocsFields>
                    <WrapperClientDocsField>
                        <WrapperClientDocsFieldDesc></WrapperClientDocsFieldDesc>  
                        <WrapperClientDocFieldDowloadField></WrapperClientDocFieldDowloadField>
                    </WrapperClientDocsField>
                    <WrapperClientDocsField>
                          
                    </WrapperClientDocsField>
                </WrapperClientDocsFields>
                <WrapperButtonsOuter>
                    <WrapperButtonsInner>

                    </WrapperButtonsInner>
                </WrapperButtonsOuter>
            </WrapperClientDocs>
        </Wrapper>
    )
}

export default ClientDetailPage;