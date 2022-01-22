import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './hero.module.css';

export const Hero = () => (
  <div className={styles.container}>
    <video poster="/images/video-bg-poster.jpg" className={styles.video_bg} autoPlay loop muted>
      <source src="/videos/bg.mp4" type="video/mp4" />
    </video>
    <div className={styles.video_overlay} />
    <motion.div className={styles.hero_wrapper}>
      <Image src="/images/hero.png" width="300" height="300" alt="" />
    </motion.div>
    <div className={styles.arrow}></div>
  </div>
);
