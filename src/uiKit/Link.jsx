import React from 'react';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const BaseLink = styled(Link)`
  &&& {
    cursor: pointer;
    font-weight: bold;
  }
`

const PrimaryLink = ({ children, onClick }) => (
  <BaseLink onClick={onClick}>{children}</BaseLink>
)

const SecondaryLink = ({ children, onClick }) => (
<BaseLink underline="always" onClick={onClick}>{children}</BaseLink>
)

export { PrimaryLink, SecondaryLink }