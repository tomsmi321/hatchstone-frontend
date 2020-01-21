import React, { useContext } from "react";
import styled from "styled-components";
import { Background, BackgroundOverlay } from "./Background";
import { DarkFooter } from "uiKit/Footer";
import NavBar from "uiKit/navbars/LandingPageNav";
import { useHistory } from "react-router-dom";

// import { AuthContext } from "../../contexts/AuthContext"

const Heading = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`;

export const LandingPage = () => {
  const history = useHistory();
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   const id = currentUser._id
  //   history.push(`/conversations/${id}`);
  //   return null
  // } else {
  return (
    <>
      <Background>
        <BackgroundOverlay>
          <NavBar />
          <Heading>Welcome to Hatchstone Client Onboarding</Heading>
          <DarkFooter />
        </BackgroundOverlay>
      </Background>
    </>
  );
};
// };
