import React from 'react'
import { styled } from '@mui/material';

const ExpContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '2rem 0',
  alignItems: 'start',
  maxWidth: '1000px',
  background: '#DBDBDB11',
  borderRadius: '20px',
  margin: '0 auto 40px',
  border: '2px solid #01e5e5',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))

const CompanyImg = styled('img')(({ theme }) => ({
  width: '14%',
  aspectRatio: 1,
  height: '100%',
  marginRight: 40,
  marginLeft: 20,
  borderRadius: 20,
  [theme.breakpoints.down('md')]: {
    marginBottom: 20
  }
}))

const CompanyName = styled('h2')(({ theme }) => ({
  fontSize: 26,
  letterSpacing: 1,
  fontWeight: '700',
  marginBottom: '1%',
}))

const Li = styled('li')(({ theme }) => ({
  fontStyle: 'italic',
  letterSpacing: 1,
  lineHeight: 1.6
}))

function ExpList() {
  return (
    <div className='.exp-list-container'>
      <ExpContainer className="mc-exp-container">
        <CompanyImg src='/assets/images/almond-logo-2.png' alt='' />
        <div className='exp-data-container' style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <div>
            <CompanyName>Almond Solutions Private Limited</CompanyName>
            <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>31/04/2023 to Present</p>
          </div>

          <ul className='exp-list' style={{ marginTop: '7%' }}>
            <Li>Learnt software development on Tech Stacks like MERN, EJS and Next.js</Li>
            <Li>Learnt skills like collaboration, teamwork, and presentation.</Li>

          </ul>
        </div>
      </ExpContainer>
      <ExpContainer className="mc-exp-container">
        <CompanyImg src='/assets/images/7gravity-logo.jpeg' alt='' />
        <div className='exp-data-container' style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <div>
            <CompanyName>7 Gravity Private Limited</CompanyName>
            <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>28/12/2022 to 31/04/2023</p>
          </div>

          <ul className='exp-list' style={{ marginTop: '7%' }}>
            <Li>Learnt software development on Tech Stacks like MERN, EJS and Next.js</Li>
            <Li>Learnt skills like collaboration, teamwork, and presentation.</Li>

          </ul>
        </div>
      </ExpContainer>
      <ExpContainer className="mc-exp-container">
        <CompanyImg src='/assets/images/dualite-logo.png' alt='' />
        <div className='exp-data-container' style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <div>
            <CompanyName>Dualite Technology Private Limited</CompanyName>
            <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>28/09/2022 to 28/12/2022</p>
          </div>

          <ul className='exp-list' style={{ marginTop: '7%' }}>
            <Li>Integrate platforms like Google Analytics, ESPs such as Twilio and ShotStack</Li>
            <Li>Built Virtual Tour, Social Surveys and 3d User Interfaces for different projects</Li>

          </ul>
        </div>
      </ExpContainer>
      <ExpContainer className="mc-exp-container">
        <CompanyImg src='/assets/images/suvidha-logo.jpeg' alt='' />
        <div className='exp-data-container' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', minHeight: 125 }}>
          <div>
            <CompanyName>Suvidha Mahila Foundation</CompanyName>
            <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: 1 }}>21/08/2022 to 21/09/2022</p>
          </div>

          <ul className='exp-list' style={{ marginTop: '7%' }}>
            <Li>Built a Coding Bootcamp Website for kids</Li>
            <Li>Learn control & teamwork on large scale projects</Li>

          </ul>
        </div>
      </ExpContainer>

    </div>
  )
}

export default ExpList
