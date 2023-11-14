import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import { styled } from '@mui/material';
import Link from 'next/link';

const MainContainer = styled('div')(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 1rem',
    marginBottom: '10vh',
    height: '50vh'
  }
}))

const HeadingText = styled('h1')(({ theme }) => ({
  fontSize: 60,
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20

  },
}))

const SmallText = styled('h1')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  fontWeight: 200,
  fontSize: 28,
  [theme.breakpoints.down('md')]: {
    fontSize: 22,
    width: '100%',
  }
}))

const HypenLine = styled('div')(({ theme }) => ({
  width: '30%',
  height: 1,
  backgroundColor: '#DBDBDB',
  marginRight: 15,
  [theme.breakpoints.down('md')]: {
    width: '10%'
  },
}))

const KeyPointsContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const HireMe = styled('button')(({ theme }) => ({
  background: '#01e5e5',
  border: 'none',
  padding: '8px 28px',
  borderRadius: 5,
  color: '#000',
  fontSize: 18,
  fontFamily: `'Montserrat',sans-serif`,
  fontWeight: 800,
  marginRight: 30,
  letterSpacing: 1,
  cursor: 'pointer',
  transition: '0.2s all ease',
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    padding: '6px 18px'
  }
}))
const ChatBtn = styled(Link)(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  padding: '5px 12px',
  borderRadius: 5,
  color: '#01e5e5',
  fontSize: 18,
  fontFamily: `'Montserrat',sans-serif`,
  display: 'flex',
  alignItems: "center",
  [theme.breakpoints.down('md')]: {
    fontSize: 14
  }



}))


function LeftContainer() {
  return (
    <MainContainer>
      <div style={StyleSheet.textContainer}>
        <HeadingText className="my-name">Hi, I&apos;m Paras Kumar</HeadingText>
        <SmallText><HypenLine></HypenLine>a full stack developer...</SmallText>
        <KeyPointsContainer style={{ marginTop: 40 }}>
          <p style={StyleSheet.mainPoints}>Develop scale-able Websites & Applications</p>
          <p style={StyleSheet.mainPoints}>Built with the advance Cutting Edge Technologies</p>
          <p style={StyleSheet.mainPoints}>Best SEO Optimization with Server Side Rendering</p>
          <p style={StyleSheet.mainPoints}>User testing, feedback and validation</p>
        </KeyPointsContainer>
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center' }}>
          <HireMe className='btn btn-hoverable'
            onClick={() => { window.open("https://www.freelancer.com/u/paraskumar24", "_target") }}>Hire me </HireMe>
          <ChatBtn href={'https://wa.me/+918445840329'} target='_blank'>
            <span style={{ paddingRight: 10 }}>Chat with me</span>
            <TelegramIcon />
          </ChatBtn>

        </div>
      </div>

    </MainContainer>
  )
}

export default LeftContainer;

const StyleSheet = {
  mainContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textContainer: {
    textAlign: 'left',
  },
  greeting: {
    fontSize: 60,
    fontWeight: 600,
  },
  mainPoints: {
    marginTop: 20,
    fontSize: 18,
  },
  hireMe: {

  }
}
