import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  height: 55px;
  width: 100vw;
  box-shadow: -1px -2px 0px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5vw;
`

export const Footer = () => {
  return(
    <Wrapper>
      <Typography variant="h6">© 2018-2019 Hatchstone Capital Pty Ltd</Typography>
    </Wrapper>
    )
}