import { useState } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { About } from '../components/About';
import styles from '../styles/Home.module.css';

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
      <About />
    </div>
  );
}
