

import React from 'react'
import { Button, styled } from '@mui/material';
import TechGallery from './TechGallery';


const MainContainer = styled('div')(({ theme }) => ({

    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'radial-gradient(circle,#070707, #000)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start'
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
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))

const Showmore = styled(Button)(({ theme }) => ({
    background: '#0000',
    border: '2px solid #DBDBDB',
    fontFamily: `'Montserrat',sans-serif`,
    fontSize: 16,
    marginTop: '8%',
    fontWeight: '700',
    padding: '2px 12px',
    ":hover": {
        background: '#0000',
    }
}))

function Technologies() {
    return (
        <MainContainer>
            <div style={{ padding: '5% 1rem 1rem 1rem', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '1%' }}>
                    <Heading>Technologies</Heading>
                    <SmallText><span style={{ width: 20, height: 2, marginRight: 10, background: '#DBDBDB' }}></span>that i have worked on</SmallText>
                </div>
                <TechGallery />
            </div>
        </MainContainer>
    )
}

export default Technologies;
