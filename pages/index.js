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
import styles from '../styles/home.module.css'

const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState('about');

  const handleScroll = (elementName) => {
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
      <Header currentPage={currentPage} handleScroll={handleScroll} />
      {/* <AnimatePresence exitBeforeEnter initial={true}> */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <Hero />
        <NFTSlider />
        <Element name="about">
          <About setCurrentPage={setCurrentPage} />
        </Element>
        <Element name="roadmap">
          <Roadmap setCurrentPage={setCurrentPage} />
        </Element>
        <Element name="socials">
          <Socials setCurrentPage={setCurrentPage} />
        </Element>
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
}
