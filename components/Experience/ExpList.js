import React from 'react'
import {styled} from '@mui/material';

const ExpContainer = styled('div')(({theme})=>({
    display:'flex',
    padding:'2rem 0',
    alignItems:'start',
    maxWidth:'1000px',
    background:'#DBDBDB11',
    borderRadius:'20px',
    margin:'0 auto 40px',
    border:'3px solid #01e5e5',
    [theme.breakpoints.down('md')]:{
      flexDirection:'column',
      justifyContent:'center'
    }
}))

const CompanyImg = styled('img')(({theme})=>({
    width:'14%',
    aspectRatio:1,
    height:'100%',
    marginRight:40,
    marginLeft:20,
    borderRadius:20,
    [theme.breakpoints.down('md')]:{
      marginBottom:20
    }
}))

const CompanyName = styled('h2')(({theme})=>({
    fontSize:26,
    letterSpacing:1,
    fontWeight:'700',
    marginBottom:'1%',
}))

const Li = styled('li')(({theme})=>({
  fontStyle:'italic',
  letterSpacing:1,
  lineHeight:1.6
}))

function ExpList() {
  return (
    <div className='.exp-list-container'>
     <ExpContainer>
     <CompanyImg  src='https://s3.ap-south-1.amazonaws.com/cdncontentdualite.com/Unnecessary/DualiteLogo.png' alt='' />
     <div className='exp-data-container' style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>
     <div>
     <CompanyName>Dualite Technology Private Limited</CompanyName>
     <p style={{fontSize:14,fontWeight:500,letterSpacing:1}}>28/10/2022 to Present</p>
     </div>

      <ul className='exp-list' style={{marginTop:'7%'}}>
      <Li>Integrate platforms like Google Analytics, ESPs such as Twilio and ShotStack</Li>
      <Li>Built Virtual Tour, Social Surveys and 3d User Interfaces for different projects</Li>

      </ul> 
     </div>
     </ExpContainer>
     <ExpContainer>
     <CompanyImg src='https://s3.ap-south-1.amazonaws.com/cdncontentdualite.com/Unnecessary/Suvidha-Foundation.png' alt='' />
     <div className='exp-data-container' style={{display:'flex',justifyContent:'space-between',flexDirection:'column',minHeight:125}}>
     <div>
     <CompanyName>Suvidha Mahila Foundation</CompanyName>
     <p style={{fontSize:14,fontWeight:500,letterSpacing:1}}>21/09/2022 to 04/10/2022</p>
     </div>

      <ul className='exp-list' style={{marginTop:'7%'}}>
      <Li>Built a Coding Bootcamp Website for kids</Li>
      <Li>Learn control & teamwork on large scale projects</Li>

      </ul>
     </div>
     </ExpContainer>
      
    </div>
  )
}

export default ExpList
