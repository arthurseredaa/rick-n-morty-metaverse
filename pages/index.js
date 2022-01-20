import { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Roadmap } from '../components/Roadmap';
import { Socials } from '../components/Socials';
import { Hero } from '../components/Hero';
import { NFTSlider } from '../components/NFTSlider/NFTSlider';
import styles from '../styles/home.module.css';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('about');

  const handleScrollToSection = (elementName) => {
    setCurrentPage(elementName);

    scroller.scrollTo(elementName, {
      smooth: true,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty: Metaverse</title>
        <meta name="description" content="NFT collection" />
      </Head>
      <Header currentPage={currentPage} handleScroll={handleScrollToSection} />
      <div>
        <Hero handleScroll={handleScrollToSection} />
        <Element name="slider">
          <NFTSlider />
        </Element>
        <Element name="about">
          <About setCurrentPage={setCurrentPage} />
        </Element>
        <Element name="roadmap">
          <Roadmap setCurrentPage={setCurrentPage} />
        </Element>
        <Element name="socials">
          <Socials setCurrentPage={setCurrentPage} />
        </Element>
      </div>
    </div>
  );
}
