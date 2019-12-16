import React from 'react';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const BaseLink = styled(Link)`
  &&& {
    cursor: pointer;
  }
`

const PrimaryLink = ({ children }) => (
  <BaseLink>{children}</BaseLink>
)

const SecondaryLink = ({ children }) => (
<BaseLink underline="always">{children}</BaseLink>
)

export { PrimaryLink, SecondaryLink }