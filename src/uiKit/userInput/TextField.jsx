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

const ErrorMessage = styled.div`
  margin-top: 15px;
  font-weight: bold;
  color: red;
`

export const TextField = ({ labelValue, onChange, onBlur, name, touched, error }) => (
  <>
    <BaseTextField
      name={name}
      label={labelValue}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined" />
    { touched && error && <ErrorMessage>{error}</ErrorMessage> }
  </>
)