import React from 'react'
import { Button } from '@material-ui/core';
import styled from "styled-components"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//  sc-bdVaJa ggNnrl MuiButton-containedPrimary Mui-disabled Mui-disabled


// Stylyed component overwritting/adding css to the passed in Button component imported from Material UI
// '&&&' is to overwrite the css namespace as the most specific selector so that the styles are applied over Material UI's
const BaseButton = styled(Button)`
  &&& {
    font-weight: 600;
    color: #FFFFFF;
    text-transform: none;
    padding: 8px 28px;
  }
  &&&.MuiButton-contained.Mui-disabled {
    background-color: rgba(50,111,187,0.7);
  }
`

const ApprovedBaseButton = styled(Button)`
  &&& {
    font-weight: 600;
    color: #FFFFFF;
    text-transform: none;
    background-color: #01BE85;
  }
`
const DoneCircleIcon = styled(CheckCircleOutlineIcon)`
  padding-left: 5px;
`


export const PrimaryButton = ({ children, onClick, disabled, type }) => {
  return (
  <BaseButton variant="contained" color="primary" onClick={onClick} disabled={disabled} type={type}>{children}</BaseButton>
)}

export const SecondaryButton = ({ children }) => (
  <BaseButton variant="contained" color="secondary">{children}</BaseButton>
)

export const TertiaryButton = styled(Button).attrs({ variant: "contained", color: "default"})`
  &&& {
    color: #000000;
    background-color: #bdbdbd;
    padding: 4px 22px;
    font-size: 12px;
    text-transform: none;
  }
`

export const ApprovedButton = ({ children }) => (
  <ApprovedBaseButton variant="contained" color="#01BE85">
    {children}
    <DoneCircleIcon />
  </ApprovedBaseButton>
)