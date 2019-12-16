import React from 'react'
import { Button } from '@material-ui/core';
import styled from "styled-components"

// Stylyed component overwritting/adding css to the passed in Button component imported from Material UI
// '&&&' is to overwrite the css namespace as the most specific selector so that the styles are applied over Material UI's
const BaseButton = styled(Button)`
  &&& {
    font-weight: 600;
    color: #FFFFFF;
    text-transform: none;
  }
`

export const PrimaryButton = ({ children }) => (
  <BaseButton variant="contained" color="primary">{children}</BaseButton>
)

export const SecondaryButton = ({ children }) => (
  <BaseButton variant="contained" color="secondary">{children}</BaseButton>
)

export const TertiaryButton = ({ children }) => (
  <BaseButton variant="contained" color="default">{children}</BaseButton>
)