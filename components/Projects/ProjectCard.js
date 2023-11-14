import React from 'react'
import { Button, styled } from '@mui/material';
import { width } from '@mui/system';
import { useState } from 'react';

const Video = styled('video')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}))

const Component = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  maxHeight: 250,
  borderRadius: 20,
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  marginBottom: 20,
  border: '2px solid #01e5e5'
}))

const InfoCover = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
}))

const MainContainer = styled('div')(({ theme }) => ({
  marginBottom: 100,
  maxWidth: 400,
}))

const ExploreMore = styled('button')(({ theme }) => ({
  background: '#01e5e5',
  color: '#000',
  cursor: 'pointer',
  border: 'none'
}))



function ProjectCard({ item }) {

  const [infobar, setInfobar] = useState({
    padding: '1rem',
    background: 'linear-gradient(-90deg,#01e5e511,#000000)',
    opacity: '0.8',
    transform: 'translateY(100%)',
    color: '#01e5e5'
  });


  const InfoContainer = styled('div')(({ theme }) => (infobar))

  const showInfo = () => {
    setInfobar({ padding: '1rem', backgroundColor: '#301020cc', transform: 'translateY(0%)', transition: '0.2s all ease', color: '#01e5e5' });
    console.log(0)
  }

  const hideInfo = () => {
    setInfobar({ padding: '1rem', backgroundColor: '#301020cc', transform: 'translateY(100%)', transition: '0.2s all ease', color: '#01e5e5' });
    console.log(1)
  }

  return (
    <MainContainer>
      <Component className='component'>
        {!item.thumbnail && <Video muted autoPlay loop src={item.video} />}
        {item.thumbnail && <img src={item.thumbnail} className='mc-project-thumbnail' />}
        <InfoCover>
          <InfoContainer className='cover'>
            <h1 style={{ fontSize: 18, marginBottom: 2, letterSpacing: 1 }}>{item.name}</h1>
            <p style={{ fontSize: 14, letterSpacing: 1 }}>{item.date}</p>
          </InfoContainer>
        </InfoCover>
      </Component>
      <p style={{ textAlign: 'center', marginBottom: 20, color: '#7f9292', padding: '0 8px', lineHeight: 1.7 }}>{item.text}</p>
      <div style={{ width: '100%', display: 'flex' }}>
        <ExploreMore style={{ margin: '0 auto', padding: '8px 24px', borderRadius: 5, fontWeight: 700, letterSpacing: 1 }} variant='contained'>Explore more</ExploreMore>
      </div>
    </MainContainer>
  )
}





export default ProjectCard;
