import Image from 'next/image';
import { motion } from 'framer-motion';
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
      <h3 className={styles.title}>Roadmap</h3>

      <div className={styles.row}>
        <motion.div
          whileInView={{ x: [-300, 0] }}
          viewport={{ once: true }}
          className={styles.column}
        >
          <Image
            src="/images/morty-portal.jpg"
            alt=""
            width="500"
            height="400"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          className={styles.column}
        >
          <h4>Phase 1</h4>
          <h4>Preparation</h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          quis qui, rerum incidunt voluptates magnam soluta iusto fugit esse
          consectetur dignissimos eos sequi omnis repellat quod laboriosam
          possimus minus, iure aliquam laudantium sunt? Illo id et quae dolorem
          sed vitae rerum, odit consequatur, laborum excepturi, voluptatibus
          dolorum nesciunt possimus iste.
        </motion.div>
      </div>

      <div className={styles.row}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          className={styles.column}
        >
          <h4>Phase 2</h4>
          <h4>NFT Giveaway</h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          quis qui, rerum incidunt voluptates magnam soluta iusto fugit esse
          consectetur dignissimos eos sequi omnis repellat quod laboriosam
          possimus minus, iure aliquam laudantium sunt? Illo id et quae dolorem
          sed vitae rerum, odit consequatur, laborum excepturi, voluptatibus
          dolorum nesciunt possimus iste.
        </motion.div>

        <motion.div
          whileInView={{ x: [300, 0] }}
          viewport={{ once: true }}
          className={styles.column}
        >
          <Image
            src="/images/rick-portal.jpg"
            alt=""
            width="500"
            height="400"
          />
        </motion.div>
      </div>
    </div>
  );
};
