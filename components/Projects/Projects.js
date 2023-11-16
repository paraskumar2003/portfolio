import React from 'react'
import { Button, styled } from '@mui/material'
import ProjectList from './ProjectList'
import Header from '../Home/Header'

const MainContainer = styled('div')(({ theme }) => ({

    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'radial-gradient(circle,#070707,#000)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    overflow: 'hidden',
}))

const Heading = styled('h1')(({ theme }) => ({
    fontSize: 60,
    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
        fontSize: 32,
    }
}))

const SmallText = styled('p')(({ theme }) => ({
    fontSize: 28,
    fontWeight: 200,
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    transform: 'translateX(250%)',
    overflow: 'hidden',
}))

const Showmore = styled(Button)(({ theme }) => ({
    background: '#0000',
    border: '2px solid #01e5e5',
    color: '#01e5e5',
    fontFamily: `'Montserrat',sans-serif`,
    fontSize: 16,
    marginTop: '0%',
    fontWeight: '700',
    padding: '12px 80px',
    textTransform: 'none',
    ":hover": {
        background: '#0000',
        boxShadow: '0px 0px 10px #01e5e5'
    }
}))

function Projects() {
    return (
        <MainContainer id='project'>
            <div style={{ padding: '8% 1rem 1rem 1rem', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '7%' }}>
                    <Heading>Projects</Heading>
                    <SmallText className='mc-small-text'><span style={{ width: 20, height: 2, marginRight: 10, background: '#DBDBDB' }}></span>that i have worked on</SmallText>
                </div>
                <ProjectList />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Showmore variant='contained'>Show more</Showmore>
                </div>
            </div>
        </MainContainer>
    )
}

export default Projects


