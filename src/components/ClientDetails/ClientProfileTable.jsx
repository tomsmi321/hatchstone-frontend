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

const WrapperClientProfileDetailsItem = styled.div`
    /* background-color: navajowhite; */
    margin-bottom: 20px;

`

const FieldTitle = styled.p`
    font-weight: bold;
    font-size: 14px;
    display: inline;

`

const FieldData = styled.p`
    font-size: 14px;
    display: inline;
`

const ClientProfileTable = (props) => {
    const { firstName, 
            lastName, 
            phone, 
            address, 
            investorType, 
            profileImage } = props.client;
            
    return (
        <Wrapper>
            <WrapperAccountCircleIcon> 
                {profileImage ? <ProfileImage imageSrc={profileImage}/> : <AccountCircleIcon />}
            </WrapperAccountCircleIcon>
            <WrapperClientProfileDetailsItem>
                <FieldTitle>First name: </FieldTitle>
                <FieldData>{firstName}</FieldData>
            </WrapperClientProfileDetailsItem>
            <WrapperClientProfileDetailsItem>
                <FieldTitle>Last name: </FieldTitle>
                <FieldData>{lastName}</FieldData>
            </WrapperClientProfileDetailsItem>
            <WrapperClientProfileDetailsItem>
                <FieldTitle>Contact number: </FieldTitle>
                <FieldData>{phone}</FieldData>
            </WrapperClientProfileDetailsItem>
            <WrapperClientProfileDetailsItem>
                <FieldTitle>Address: </FieldTitle>
                <FieldData>{address}</FieldData>
            </WrapperClientProfileDetailsItem>
            <WrapperClientProfileDetailsItem>
                <FieldTitle>Investor type: </FieldTitle>
                <FieldData>{investorType}</FieldData>
            </WrapperClientProfileDetailsItem>
        </Wrapper>
    )
}

export default ClientProfileTable;