import React from 'react'
import styled from 'styled-components'
import { TertiaryButton } from 'uiKit/Button'

const UploadPictureContainer = styled.div`
    /* background-color: sandybrown; */
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 18px;
`

const UploadButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 12px;
    & > button {
        margin-right: 20px;
    }
`

export const UploadPictureField = () => {
    return (
        <UploadPictureContainer>
            Profile Picture (optional)
            <UploadButtonContainer>
                <TertiaryButton>Choose File</TertiaryButton>
                No file chosen
            </UploadButtonContainer>
        </UploadPictureContainer>
    )
}

