import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* background-color: lightgrey; */
    width: 26.5vw;
    margin-bottom: 4.5vh;
`

const WrapperDocFieldHeader = styled.div`
    /* background-color: royalblue; */
    font-size: 14px;
`

const WrapperDocFieldDropZone = styled.div`
    /* background-color: wheat; */
    font-size: 14px;
    height: 5.55vh;
`

const WrapperDocFieldFooter = styled.div`
    /* background-color: lightpink; */
    font-size: 12px;
    color: #326FBB;
    float: right;
    text-decoration: underline;
`

const DocumentField = () => {
    return (
        <Wrapper>
            <WrapperDocFieldHeader>Company verification</WrapperDocFieldHeader>
            <WrapperDocFieldDropZone>Dropzone</WrapperDocFieldDropZone>
            <WrapperDocFieldFooter>Add another file</WrapperDocFieldFooter>
        </Wrapper>
    )
}

export default DocumentField;