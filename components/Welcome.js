
import { styled } from '@mui/material';
import React, { useContext } from 'react'
import gif from '../assets/gif-arrow.gif';
import { WelcomeContext } from '../context/WelcomeContext';

const Component = styled('div')(({ theme }) => ({

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#000',

}))

const TextContainer = styled('div')(({ theme }) => ({
    fontSize: '120px',
    color: '#eee',
    opacity: '0',
    transition: '0.3s all ease',
    marginBottom: 40,
    [theme.breakpoints.down('md')]: {
        fontSize: 45,
    }
}))

const LeftSpan = styled('span')(({ theme }) => ({
    zIndex: '11',
    fontWeight: '200',
    letterSpacing: '1',
    transition: '0.2s all ease',
    paddingRight: 10

}))


const RightSpan = styled('span')(({ theme }) => ({
    backgroundColor: 'var(--yellow-color)',
    padding: '50px 18px 0px 30px',
    color: '#000',
    fontWeight: '600',
    zIndex: '111',
}))


const Welcome = () => {


    const { setWelcome } = useContext(WelcomeContext);



    setTimeout(() => {
        const TextContainer = document.querySelector('.text-container');
        TextContainer.style.opacity = `1`;
        const leftSpan = document.querySelector('.left-span');
        const rightSpan = document.querySelector('.right-span');
        const gifImg = document.querySelector('.gif-img');
        setTimeout(() => {

            leftSpan.style.opacity = '0';
            setTimeout(() => {
                leftSpan.textContent = `React`;
                leftSpan.style.opacity = `1`;
                rightSpan.style.backgroundColor = 'aqua';
                setTimeout(() => {
                    setTimeout(() => {
                        // rightSpan.style.animation = 'changeToNext 0.5s linear';
                        rightSpan.style.animationDelay = '2.5s';
                        rightSpan.style.backgroundColor = `rgba(210,210,210,255)`;
                        leftSpan.style.opacity = '0';
                        setTimeout(() => {
                            leftSpan.textContent = `Next`;
                            leftSpan.style.opacity = '1';
                            setTimeout(() => {
                                gifImg.style.opacity = 1;
                                setTimeout(() => {
                                    // setWelcome(true);
                                    const element = document.getElementById("home");
                                    var offset = 40; // Adjust this value as needed

                                    // Calculate the new scroll position
                                    var targetScrollTop = element.offsetTop - offset;

                                    // Smoothly scroll to the new position
                                    window.scrollTo({
                                        top: targetScrollTop,
                                        behavior: 'smooth'
                                    });

                                    setTimeout(() => {
                                        setWelcome(true);
                                    }, 5000)

                                }, 500)
                            }, 200)
                        }, 300)
                    }, 500)
                }, 100)
            }, 200)
        }, 1000)
    }, 1000)


    return (
        <Component style={StyleSheet.component}>
            <TextContainer className='text-container'>
                <LeftSpan className='left-span montserrat'>Node</LeftSpan>
                <RightSpan className='right-span poppins' style={StyleSheet.rightSpan}>Js</RightSpan>
            </TextContainer>
            <img style={StyleSheet.gif} onClick={() => scrollTo(0, 1 * window.innerHeight)} className='gif-img' src='https://fuadhaider.github.io/portfolio/images/scroll_icon.gif' alt=''></img>
        </Component>
    )
}

export default Welcome;

const StyleSheet = {
    component: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',

    },
    gif: {
        position: 'absolute',
        bottom: 0,
        width: '20vw',
        opacity: 0,
        transition: '0.2s all ease',
    }

}
