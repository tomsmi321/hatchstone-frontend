import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { OUTER_APP_PATHS } from 'common/constants'

const Wrapper = styled.div`
  height: 55px;
  width: 100vw;
  box-shadow: -1px -2px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
`

const DarkWrapper = styled(Wrapper)`
  background: #1a1c1f;
  box-shadow: none;
  color: #ffffff;
`

const Text = styled.div`
  font-size: 14px;
  margin-right: 40px;
`

export const Footer = () => {
  const { pathname } = useLocation()
  return !OUTER_APP_PATHS.includes(pathname) ? (
    <Wrapper>
      <Text>© 2018-2019 Hatchstone Capital Pty Ltd</Text>
    </Wrapper>
  ) : null
}

export const DarkFooter = () => {
  return (
    <DarkWrapper>
      <Text>© 2018-2019 Hatchstone Capital Pty Ltd</Text>
    </DarkWrapper>
  )
}
