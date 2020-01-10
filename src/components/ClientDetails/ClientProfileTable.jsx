import React from 'react';
import styled from 'styled-components';
import { AccountCircle } from 'uiKit/Icon'

const Wrapper = styled.div`
    /* background-color: lightpink; */
    width: 50%;
    display: flex;
    flex-direction: column;
`

const WrapperAccountCircleIcon = styled.div`
    /* background-color: lightcoral; */
    height: 120px;
    margin-bottom: 35px;
`

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 120 } })`
  color: rgba(0, 0, 0, 0.4);
`

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin-right: 20px;
`

const WrapperClientProfileDetails = styled.div`
    /* background-color: violet; */
    .client-details-field-title {
        font-weight: bold;
        font-size: 14px;
        display: inline;
    }
    .client-details-field-data {
        font-size: 14px;
        display: inline;
    }
`

const WrapperClientProfileDetailsItem = styled.div`
    /* background-color: navajowhite; */
    margin-bottom: 20px;

`

const ClientProfileTable = () => {
    // change these, for demo purposes only, need to pull in data
    const clientProfilePhoto = true;
    const img = "data:image/jpeg;base64,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"
    
    return (
        <Wrapper>
            <WrapperAccountCircleIcon> 
                {clientProfilePhoto ? <ProfileImage imageSrc={img}/> : <AccountCircleIcon />}
            </WrapperAccountCircleIcon>
            <WrapperClientProfileDetails> 
                <WrapperClientProfileDetailsItem>
                    <p className="client-details-field-title">First name: </p><p className="client-details-field-data">{"Ashley"}</p>
                </WrapperClientProfileDetailsItem>
                <WrapperClientProfileDetailsItem>
                    <p className="client-details-field-title">Last name: </p><p className="client-details-field-data">{"Thompson"}</p>
                </WrapperClientProfileDetailsItem>
                <WrapperClientProfileDetailsItem>
                    <p className="client-details-field-title">Contact number: </p><p className="client-details-field-data">{"0435447029"}</p>
                </WrapperClientProfileDetailsItem>
                <WrapperClientProfileDetailsItem>
                    <p className="client-details-field-title">Address: </p><p className="client-details-field-data">{"100 Preview Rd, Infinity Park VIC 8880"}</p>
                </WrapperClientProfileDetailsItem>
                <WrapperClientProfileDetailsItem>
                    <p className="client-details-field-title">Investor type: </p><p className="client-details-field-data">{"Company"}</p>
                </WrapperClientProfileDetailsItem>
            </WrapperClientProfileDetails>
        </Wrapper>
    )
}

export default ClientProfileTable;