import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';


const StyledSelect = styled(Select)`
  &&& {
    height: 4.7vh;
    width: 10.5vw;
    font-size: 14px;
    display: flex;
  }
`

export const SimpleSelect = ({filter, handleFilterChange}) => {
  return (
    <>
      <FormControl variant="outlined" >
        <InputLabel margin="dense">Sort</InputLabel>
        <StyledSelect
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="">No Filter</MenuItem>
          <MenuItem value="Progress">Sort By: Progress</MenuItem>
        </StyledSelect>
      </FormControl>
    </>
  )

}