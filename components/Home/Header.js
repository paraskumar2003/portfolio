import React from 'react'
import Link from 'next/link';
import { styled } from '@mui/material';




const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '1.5rem 1rem 1rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: "center",
  background: '#000',
  position: 'sticky',
  top: 0,
  zIndex: 111,
  boxShadow: '0px 0px 10px -2px #01e5e5',
  [theme.breakpoints.down('md')]: {
    padding: 8
  }
}))

const Buttons = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: 16,
  fontFamily: `'Montserrat',sans-serif`,
  marginLeft: 30,
  cursor: 'pointer',
  boxShadow: 'none',
  ":hover": {
    boxShadow: 'none',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 10,
    fontSize: 14
  }
}))

const CvButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 'none',
  color: '#01e5e5',
  fontSize: 16,
  fontFamily: `'Montserrat',sans-serif`,
  margin: '0px 20px 0px 40px',
  border: '2px solid #01e5e5',
  borderRadius: 5,
  padding: '5px 12px',
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    margin: '0px 5px 0px 10px'
  }
}))

function Header() {

  const goToDiv = (e) => {
    const element = document.getElementById(e);
    var offset = 40; // Adjust this value as needed

    // Calculate the new scroll position
    var targetScrollTop = element.offsetTop - offset;

    // Smoothly scroll to the new position
    window.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });
  }

  return (
    <MainContainer className='header'>
      <p style={StyleSheet.name}></p>
      <div>
        <Buttons onClick={() => { goToDiv("home") }}>Home</Buttons>
        <Buttons onClick={() => { goToDiv("project") }}>Projects</Buttons>
        <Buttons onClick={() => { goToDiv("experience") }}>Experience</Buttons>
        {/* <Buttons onClick={goToProjects}>Projects</Buttons>
        <Buttons onClick={goToExp}>Experience</Buttons> */}
        <Link target={'_blank'} href={'https://s3.ap-south-1.amazonaws.com/cdncontentdualite.com/Project/Paras+Resume.pdf'}><CvButton>Download CV</CvButton></Link>
      </div>
    </MainContainer>
  )
}

export default Header

const StyleSheet = {
  mainContainer: {

  },
  name: {
    fontSize: 28,
  },
  btns: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: 18,
    fontFamily: `'Montserrat',sans-serif`,
    marginLeft: 30,
  }

}
