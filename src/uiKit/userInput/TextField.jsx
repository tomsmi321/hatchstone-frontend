import React from 'react'
import { TextField as MUITextField, InputAdornment } from '@material-ui/core';
import { Search } from 'uiKit/Icon'
import styled from 'styled-components'


const BaseTextField = styled(MUITextField).attrs({ variant: "outlined" })`
  &&& {
    width: 100%;
    :hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #326FBB;
      }
    }
  }
`

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

export const TextField = ({ label }) => (
  <BaseTextField id="outlined-basic" label={label} />
)

export const SearchField = ({ placeholder, onChange }) => (
  <BaseSearchField
    placeholder={placeholder}
    onChange={onChange}
    // startAdornment={<InputAdornment position="start">7</InputAdornment>}
    InputProps={{
      startAdornment: <InputAdornment position="start"><StyledSearchIcon /></InputAdornment>,
    }}
  />
)