import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 40vw;
  margin: 70px auto 0 auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CircleBlue = styled.div`
  background: #326fbb;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  /* border: 2px white solid; */
`;

const CircleGrey = styled.div`
  background: #cccccc;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  /* border: 2px white solid; */
`;

const Number = styled.p`
  color: white;
`;

export const UserProgressA = () => {
  return (
    <Container>
      <Stage>
        <CircleBlue>
          <Number>1</Number>
        </CircleBlue>
        <p>Sign Up</p>
      </Stage>
      {/* <RuleA/> */}
      <Stage>
        <CircleGrey>
          <Number>2</Number>
        </CircleGrey>
        <p>Complete Profile</p>
      </Stage>
      <Stage>
        <CircleGrey>
          <Number>3</Number>
        </CircleGrey>
        <p>Upload Documents</p>
      </Stage>
    </Container>
  );
};

export const UserProgressB = () => {
  return (
    <Container>
      <Stage>
        <CircleBlue>
          <Number>1</Number>
        </CircleBlue>
        <p>Sign Up</p>
      </Stage>
      <Stage>
        <CircleBlue>
          <Number>2</Number>
        </CircleBlue>
        <p>Complete Profile</p>
      </Stage>
      <Stage>
        <CircleGrey>
          <Number>3</Number>
        </CircleGrey>
        <p>Upload Documents</p>
      </Stage>
    </Container>
  );
};
