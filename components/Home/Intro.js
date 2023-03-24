import {height} from '@mui/system';
import React from 'react'
import RightContainer from './RightContainer';
import LeftContainer from './LeftContainer';
import Header from './Header';
import {styled} from '@mui/material';

const MainContainer = styled('div')(({theme})=>({
  width:"100%",
  minHeight:'90vh',
  display:'flex',
  flexWrap:'wrap',
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
  },
}))

const Intro = () => {
  return (
    <div>
    
    <MainContainer>
    <LeftContainer/>
    <RightContainer/>
    </MainContainer>
    </div>
  )
}

export default Intro;
