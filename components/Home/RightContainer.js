

import React from 'react'
import { styled } from '@mui/material'

const MainContainer = styled('div')(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFF',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '20px 0'
  }

}))
const Thumbnail = styled('img')(({ theme }) => ({
  width: '100%',
  height: '90vh',
  objectFit: 'cover',
  [theme.breakpoints.down('md')]: {
    height: '50vh',
  }
}))

function RightContainer() {
  return (
    <MainContainer>
      <Thumbnail src={'/coverImage.jpg'} />

    </MainContainer>
  )
}

export default RightContainer
