import { motion } from 'framer-motion';
import Image from 'next/image';
import { scroller } from 'react-scroll/modules';
import { Button } from '../_common/Button';
import styles from './hero.module.css';

export const Hero = () => {
  const handleClick = () => {
    scroller.scrollTo('about', {
      smooth: true,
    });
  };

  return (
    <div className={styles.container}>
      <video className={styles.video_bg} autoPlay loop muted>
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.video_overlay} />
      <motion.div className={styles.hero_wrapper} whileInView={{transform: ['rotate(10)', 'rotate(-10)']}}>
        <Image src="/images/hero.png" width="300" height="300" alt="" />
      </motion.div>
      <Button onClick={handleClick}>Explore</Button>
    </div>
  );
};
