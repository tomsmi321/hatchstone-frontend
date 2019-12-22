import React from 'react'
import { TextField as MUITextField } from '@material-ui/core';
import styled from 'styled-components'


const BaseTextField = styled(MUITextField)`
  &&& {
    width: 100%;
    :hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #326FBB;
      }
    }
  }
`

export const TextField = ({ labelValue }) => (
  <BaseTextField id="outlined-basic" label={labelValue} variant="outlined"></BaseTextField>
)