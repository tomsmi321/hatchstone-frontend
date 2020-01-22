import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Wrapper = styled.div`
  margin: ${(props) => `${props.topMargin} auto`};
  text-align: center;
`

export const LoadSpinner = ({ topMargin }) => {
  return (
    <Wrapper topMargin={topMargin}>
      <CircularProgress />
    </Wrapper>
  )
}
