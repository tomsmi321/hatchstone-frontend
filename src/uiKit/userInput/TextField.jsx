import React from 'react'
import { TextField as MUITextField, InputAdornment } from '@material-ui/core';
import { Search } from 'uiKit/Icon'
import styled from 'styled-components'


export const BaseTextField = styled(MUITextField).attrs({ variant: "outlined" })`
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

export const TextField = ({ label, onChange, onBlur, name, touched, error, size, value, inputProps, InputLabelProps, type }) => (
  <>
    <BaseTextField
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined" 
      size={size}
      inputProps={inputProps}
      InputLabelProps={InputLabelProps}/>
    { touched && error && <ErrorMessage>{error}</ErrorMessage> }
  </>
)

const BaseSearchField = styled(BaseTextField).attrs({
  id: "outlined-start-adornment",
  type: "search",
})`
  &&& {
    width: 100%;
    .MuiOutlinedInput-input {
      padding: 12px 16px;
    }
    .MuiInputLabel-outlined {
      transform: translate(12px, 15px) scale(1);
    }
    :hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #326FBB;
      }
    }
  }
`

const StyledSearchIcon = styled(Search)`
  color: rgba(0, 0, 0, 0.55);
`

export const SearchField = ({ placeholder, onChange }) => (
  <BaseSearchField
    placeholder={placeholder}
    onChange={onChange}
    InputProps={{
      startAdornment: <InputAdornment position="start"><StyledSearchIcon /></InputAdornment>,
    }}
  />
)