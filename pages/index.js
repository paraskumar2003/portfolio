import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Welcome from '../components/Welcome'
import Intro from '../components/Home/Intro'
import { useContext, useEffect } from 'react';
import Projects from '../components/Projects/Projects';
import Exp from '../components/Experience/Exp';
import Header from '../components/Home/Header';
import Contact from '../components/Contact/Contact';
import Technologies from '../components/Technologies/Technologies';
import { WelcomeContext } from '../context/WelcomeContext';

export default function Home() {

  const { welcome } = useContext(WelcomeContext);

  useEffect(() => { console.log(welcome) }, [welcome]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div style={{ minHeight: '200vh', backgroundColor: '#000', color: '#fff' }}>
      {!welcome && <Welcome />}
      <Header />
      <Intro />
      <Projects />
      <Exp />
      <Technologies />
      <Contact />
    </div>
  )
}
