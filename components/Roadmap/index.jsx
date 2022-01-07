import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './roadmap.module.css';

export const Roadmap = ({ setCurrentPage }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setCurrentPage('roadmap');
    }
  }, [isOnScreen, setCurrentPage]);

  return (
    <div ref={ref} className={styles.container}>
      roadmap
    </div>
  );
};
