import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { Button } from '../_common/Button';
import styles from './socials.module.css';

export const Socials = ({ setCurrentPage }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setCurrentPage('roadmap');
    }
  }, [isOnScreen, setCurrentPage]);

  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className={styles.curved_line}
      >
        <path
          d="M0.00,49.98 C189.61,-23.17 337.47,152.47 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: 'none', fill: '#fff' }}
        ></path>
      </svg>
      <div className={styles.content}>
        <Button social="discord" customClass={styles.social_button}>
          Discord
        </Button>
        <Button social="twitter" customClass={styles.social_button}>
          Twitter
        </Button>
      </div>
    </div>
  );
};
