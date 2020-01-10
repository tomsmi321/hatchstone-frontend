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
    return (
        <Wrapper>
                <WrapperAccountCircleIcon> 
                    <AccountCircleIcon />
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