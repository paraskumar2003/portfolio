import React from 'react'
import {styled} from '@mui/material';
import { MailOutline, Call, LinkedIn, WhatsApp, Telegram, Instagram} from '@mui/icons-material';
import Link from 'next/link';

const Component = styled('div')(({theme})=>({
    minHeight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:"3rem 0",
}))

const Info = styled('div')(({theme})=>({
    display:'flex',
    paddingBottom:40,
    alignItems:'start'
}))
const Heading  = styled('h1')(({theme})=>({
  fontSize:60,
  marginBottom:10,
  [theme.breakpoints.down('md')]:{
      fontSize:32,
  }
}))
const Inputs = styled('input')(({theme})=>({
  padding:'12px 24px',
  border:"none",
  outline:'none',
  marginBottom:30,
  fontWeight:400,
  fontSize:16,
  fontFamily:`'Montserrat',sans-serif`,
  background:"#3b3b3b",
  color:'#eee',
  "::placeholder":{
    fontWeight:400,
    color:'#a0a0a0',
  }
}))
const TextArea = styled('textarea')(({theme})=>({
  padding:'14px 24px',
  border:"none",
  outline:'none',
  marginBottom:30,
  fontWeight:400,
  fontSize:16,
  fontFamily:`'Montserrat',sans-serif`,
  height:180,
  background:"#3b3b3b",
  color:'#eee',
  "::placeholder":{
    fontWeight:400,
    color:'#a0a0a0',
    letterSpacing:0
  }
}))

const FormContainer = styled('div')(({theme})=>({

  display:'flex',
  flexDirection:"column",
  justifyContent:'center',
  width:'100%',
  padding:"0 2rem",
}))

const ContactContentCont = styled('div')(({theme})=>({
  width:'80%',
  padding:'2rem 0',
  margin:'0 auto',
  [theme.breakpoints.down('md')]:{
    width:'100%',
  }
}))

const SendMsg = styled('button')(({theme})=>({
  width:300,
  padding:'14px 24px',
  fontWeight:600,
  background:'aqua',
  cursor:'pointer',
  border:'none'
}))

const ContactContent = styled('div')(({theme})=>({
   display:'flex',
   [theme.breakpoints.down('md')]:{
    flexDirection:'column'
   }
}))

function Contact() {
  return (
    <Component className='contact-section'>
    <div style={{margin:'80px 0 60px 0'}}>
    <Heading style={{width:'100%',textAlign:'center',margin:'20px 0'}}>Contact me</Heading>
    <p className="contact-textline" style={{textAlign:'center'}}>For any kinds of information or query feel free to mail or inbox me. I&apos;ll get back to you.</p>
    </div>
    <ContactContentCont>
    <ContactContent>
          <div style={{minWidth:'300px',padding:'0 2rem'}}>
          <Info className='mail-info'>
          <MailOutline  style={{marginRight:10,fontSize:36,color:"aqua"}}/>
          <Link style={{paddingTop:3}} href="mailto:paraskumar2410@gmail.com">
          <p style={{fontWeight:600,paddingBottom:5}}>Mail me</p>
          <p>paraskumar2410@gmail.com</p>
          </Link>
          </Info>
          <Info className='mail-info'>
          <Call  style={{marginRight:10,fontSize:36,color:"aqua"}}/>
          <div style={{paddingTop:3}}>
          <p style={{fontWeight:600,paddingBottom:5}}>Send a Message</p>
          <p>+91 84458 40329</p>
          </div>
          </Info>
          <Info className='mail-info'>
          <Link target="_blank"  href="https://www.linkedin.com/in/paras-kumar-tech/">
          <LinkedIn  style={{marginRight:20,fontSize:36,color:"aqua"}} />
          </Link>
          <Link target="_blank" href="https://wa.me/+918445840329">
          <WhatsApp  style={{marginRight:20,fontSize:36,color:"aqua"}} />
          </Link>
          <Link target="_blank" href="https://t.me/paraskumartech">
          <Telegram  style={{marginRight:20,fontSize:36,color:"aqua"}} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/the_paras_kumar__/">
          <Instagram  style={{marginRight:20,fontSize:36,color:"aqua"}} />
          </Link>
          </Info>
          </div> 

          <FormContainer className='text-field'>
          <div style={{width:"100%",display:"flex",justifyContent:'space-between',flexWrap:'wrap'}}>
          <Inputs style={{width:'40%'}} placeholder='Your Name' />
          <Inputs style={{width:"50%"}}  placeholder='Your email' />
          </div>
          <Inputs placeholder='Subject' />
          <TextArea  placeholder='Your message' ></TextArea>
          <SendMsg>Send Message</SendMsg>

         

          </FormContainer>
    </ContactContent>
    </ContactContentCont>
    
    </Component>
  )
}

export default Contact
