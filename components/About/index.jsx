import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './about.module.css';

export const About = ({ setCurrentPage }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen && setCurrentPage) {
      setCurrentPage('about');
    }
  }, [isOnScreen, setCurrentPage]);

  console.log(`About: ${isOnScreen}`);

  return (
    <div id="about" className={styles.container}>
      <div className={styles.content} ref={ref}>
        <div className={styles.row}>
          <Image
            src="/images/beth-nft-image.jpg"
            alt=""
            width="500"
            height="500"
            className={styles.row_image}
          />
          <div className={styles.row_text}>
            <h3 className={styles.title}>
              Minting Rick n&apos; Morty <span role="img">🎉</span>
            </h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              placeat assumenda eum totam voluptatum. Tenetur eaque nobis quam
              quas est reiciendis facilis harum, dolorum magnam odit id vitae
              non impedit atque ullam, cum beatae temporibus! Incidunt soluta
              repellat dicta placeat, saepe odio earum eos cupiditate tempora.
              Facere, quam asperiores. Nihil et praesentium sed illo facilis,
            </p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_text}>
            <h3 className={styles.title}>
              Giveaway NFT&apos;s !! <span role="img">🥳</span>
            </h3>
            <p className={styles.description}>
              Follow us on <b>Twitter</b> or <b>Discord</b> to join big
              Giveaway. And after{' '}
              <b>SOLD OUT, ONE of YOU Will GET $1500 LIVE!!</b>
            </p>
          </div>

          <Image
            src="/images/beth-nft-image.jpg"
            alt=""
            width="500"
            height="500"
            className={styles.row_image}
          />
        </div>
      </div>

      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className={styles.curved_line}
      >
        <path
          d="M0.00,49.98 C189.61,-23.17 337.47,152.47 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: 'none', fill: '#000' }}
        ></path>
      </svg>
    </div>
  );
};
