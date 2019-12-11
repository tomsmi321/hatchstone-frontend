import { Button } from '@material-ui/core';
import styled from "styled-components"

// Stylyed component overwritting/adding css to the passed in Button component imported from Material UI
// '&&&' is to overwrite the css namespace as the most specific selector so that the styles are applied over Material UI's
export const PrimaryButton = styled(Button)`
  &&& {
    font-weight: 600;
    color: #FFFFFF;
    background-color: #326FBB;
  }
`