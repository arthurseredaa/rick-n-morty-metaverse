import { useEffect, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '../components/Header';
import { About } from '../components/About';
import styles from '../styles/Home.module.css';
import { Roadmap } from '../components/Roadmap';

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty: Metaverse</title>
        <meta
          name="description"
          content="Rick and Morty: Metaverse NFT's collection"
        />
      </Head>
      <Header currentPage={currentPage} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <About setCurrentPage={setCurrentPage} />
          <Roadmap setCurrentPage={setCurrentPage} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
