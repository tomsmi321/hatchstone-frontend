import React from 'react'
import styled from 'styled-components'

export const TextArea = styled.textarea.attrs(props => ({
  rows: 5
}))`
  resize: none;
  background-color: #FFFFFF;
  border: none;
  min-width: 350px;
  text-align: start;
  display: flex;
  padding: 15px;
  font-size: 1rem;
  outline: 0;
`
