import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './roadmap.module.css';

export const Roadmap = ({ setCurrentPage }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen && setCurrentPage) {
      setCurrentPage('roadmap');
    }
  }, [isOnScreen, setCurrentPage]);

  console.log(`Roadmap: ${isOnScreen}`);

  return (
    <div ref={ref} className={styles.container}>
      roadmap
    </div>
  );
};
