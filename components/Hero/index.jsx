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
      <Image src="/images/hero.jpg" width="500" height="500" alt="" />
      <Button onClick={handleClick}>Explore</Button>
    </div>
  );
};
