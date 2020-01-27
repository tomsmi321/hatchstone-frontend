import React from 'react'
import styled from 'styled-components'
import backgroundImage from 'assets/images/hatchstone-stock-image.jpeg'

const Background = styled.div`
  height: 100vh;
  background: url(${backgroundImage}) center center no-repeat;
  background-size: cover;
  z-index: -10;
`
const BackgroundOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
`

export { Background, BackgroundOverlay }
