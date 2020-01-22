import React from 'react'
import styled from 'styled-components'
import { PrimaryLink } from 'uiKit/Link'
import { useHistory, useLocation } from 'react-router-dom'

const LogInContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LogInText = styled.div`
  margin-right: 5px;
`

const Link = styled.div`
  margin-left: 60px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  cursor: pointer;
`

const NavItem = ({ label, path }) => {
  const { pathname } = useLocation()
  const history = useHistory()
  return (
    <Link onClick={() => history.push(path)} isActive={pathname === path}>
      {label}
    </Link>
  )
}

export const SignUpLink = () => {
  const history = useHistory()
  return (
    <PrimaryLink onClick={() => history.push('/sign-up')}>Sign Up</PrimaryLink>
  )
}

export const LogInLink = () => {
  const history = useHistory()
  return (
    <LogInContainer>
      <LogInText>Already have an account?</LogInText>
      <PrimaryLink onClick={() => history.push('/log-in')}>Login</PrimaryLink>
    </LogInContainer>
  )
}

export const SignOutLink = ({ onClick }) => {
  const history = useHistory()
  return <PrimaryLink onClick={onClick}>Sign out</PrimaryLink>
}

export const AdminLinks = ({ userId }) => {
  const links = [
    {
      label: 'Onboarding Area',
      path: '/onboarding-clients',
    },
    {
      label: 'Approved Clients',
      path: '/approved-clients',
    },
    {
      label: 'Conversations',
      path: `/conversations/${userId}`,
    },
  ]

  return (
    <>
      {links.map((link, i) => (
        <NavItem key={i} label={link.label} path={link.path} />
      ))}
    </>
  )
}

export const ClientLinks = ({ userId }) => {
  const links = [
    {
      label: 'Conversations',
      path: `/conversations/${userId}`,
    },
  ]
  return (
    <>
      {links.map((link, i) => (
        <NavItem key={i} label={link.label} path={link.path} />
      ))}
    </>
  )
}
