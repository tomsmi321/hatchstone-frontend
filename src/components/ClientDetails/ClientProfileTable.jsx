import React from "react";
import styled from "styled-components";
import { AccountCircle } from "uiKit/Icon";

const Wrapper = styled.div`
  /* background-color: lightpink; */
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const WrapperAccountCircleIcon = styled.div`
  /* background-color: lightcoral; */
  height: 120px;
  margin-bottom: 35px;
`;

const AccountCircleIcon = styled(AccountCircle).attrs({ style: { fontSize: 120 } })`
  color: rgba(0, 0, 0, 0.4);
`;

const ProfileImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin-right: 20px;
`;

const WrapperClientProfileDetailsItem = styled.div`
  /* background-color: navajowhite; */
  margin-bottom: 20px;
`;

const FieldTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  display: inline;
`;

const FieldData = styled.p`
  font-size: 14px;
  display: inline;
`;

const ClientProfileTable = props => {
  let { firstName, lastName, phone, address, investorType, profileImage } = props.client;

  const capitaliseString = str => {
    return `${str[0].toUpperCase() + str.slice(1, str.length)}`;
  };

  const capitaliseAddress = strOfWords => {
    const arrOfWords = strOfWords.split(" ");
    const arrOfWordsCapitalised = arrOfWords.map(word => {
      return word[0].toUpperCase() + word.substr(1);
    });
    return arrOfWordsCapitalised.join(" ");
  };

  const isEmpty = obj => {
    return Object.keys(obj).length === 0;
  };

  return (
    <>
      {!isEmpty(props.client) ? (
        <Wrapper>
          <WrapperAccountCircleIcon>
            {profileImage ? <ProfileImage imageSrc={profileImage} /> : <AccountCircleIcon />}
          </WrapperAccountCircleIcon>
          <WrapperClientProfileDetailsItem>
            <FieldTitle>First name: </FieldTitle>
            <FieldData>{firstName ? capitaliseString(firstName) : "NA"}</FieldData>
          </WrapperClientProfileDetailsItem>
          <WrapperClientProfileDetailsItem>
            <FieldTitle>Last name: </FieldTitle>
            <FieldData>{lastName ? capitaliseString(lastName) : "NA"}</FieldData>
          </WrapperClientProfileDetailsItem>
          <WrapperClientProfileDetailsItem>
            <FieldTitle>Contact number: </FieldTitle>
            <FieldData>{phone ? phone : "NA"}</FieldData>
          </WrapperClientProfileDetailsItem>
          <WrapperClientProfileDetailsItem>
            <FieldTitle>Address: </FieldTitle>
            <FieldData>{address ? capitaliseAddress(address) : "NA"}</FieldData>
          </WrapperClientProfileDetailsItem>
          <WrapperClientProfileDetailsItem>
            <FieldTitle>Investor type: </FieldTitle>
            <FieldData>{investorType ? capitaliseString(investorType) : "NA"}</FieldData>
          </WrapperClientProfileDetailsItem>
        </Wrapper>
      ) : null}
    </>
  );
};

export default ClientProfileTable;
