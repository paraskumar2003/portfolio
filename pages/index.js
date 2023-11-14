import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Welcome from '../components/Welcome'
import Intro from '../components/Home/Intro'
import { useState } from 'react';
import Projects from '../components/Projects/Projects';
import Exp from '../components/Experience/Exp';
import Header from '../components/Home/Header';
import Contact from '../components/Contact/Contact';
import Technologies from '../components/Technologies/Technologies';

export default function Home() {

  const [welcome, setWelcome] = useState(true);
  return (
    <div style={{ minHeight: '200vh', backgroundColor: '#000', color: '#fff' }}>
      <Welcome />
      <Header />
      <Intro />
      <Projects />
      <Exp />
      <Technologies />
      <Contact />
    </div>
  )
}
