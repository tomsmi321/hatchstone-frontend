import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import logo from "assets/hatchstoneAssets/hatchstone-logo-black.svg";
import { OUTER_APP_PATHS } from "common/constants";
import { SignUpLink, LogInLink, SignOutLink, AdminLinks, ClientLinks } from "./Links";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../../../contexts/AuthContext";

const LOG_IN_PATH = "/log-in";
const SIGN_UP_PATH = "/sign-up";
const CREATE_PROFILE_PATH = "/create-profile";
const PRE_APP_PATHS = [LOG_IN_PATH, SIGN_UP_PATH, CREATE_PROFILE_PATH];

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

const Inner = styled.div`
  margin: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled.div`
  background-image: url("${logo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 37px;
  width: 197px;
  cursor: pointer;
`;

const LeftNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavBar = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const { currentUser, logout } = useContext(AuthContext)
  console.log(currentUser)
  const isLoggedIn = !PRE_APP_PATHS.includes(pathname) && !PRE_APP_PATHS.includes(pathname)
  const isAdmin = currentUser.admin

  return !OUTER_APP_PATHS.includes(pathname) ? (
    <Container>
      <Inner>
        <LeftNavContainer>
          {isAdmin && <Logo onClick={ () => (history.push('/onboarding-clients'))} />}
          {!isAdmin && <Logo onClick={ () => (history.push(`/conversations/${currentUser._id}`))} />}
          {isLoggedIn && isAdmin && <AdminLinks />}
          {isLoggedIn && !isAdmin && <ClientLinks userId={currentUser._id}/>}
        </LeftNavContainer>

        {pathname === LOG_IN_PATH && <SignUpLink />}
        {pathname === SIGN_UP_PATH && <LogInLink />}
        {pathname === CREATE_PROFILE_PATH && <SignOutLink onClick={logout} />}
        {isLoggedIn && <ProfileDropdown />}
      </Inner>
    </Container>
  ) : null;
};

export default NavBar;
