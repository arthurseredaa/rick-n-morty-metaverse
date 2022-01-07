/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './header.module.css';

const variants = {
  open: { opacity: 1, visibility: 'visible' },
  close: { opacity: 0, visibility: 'visible' },
};

export const Header = ({ currentPage }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (isMenuActive) {
      document.querySelector('body').classList.add('body_fixed');
    } else {
      document.querySelector('body').classList.remove('body_fixed');
    }
  }, [isMenuActive]);

  const getLinkClassNames = (page) => {
    return classNames(styles.link, {
      [styles.active_link]: page === currentPage,
    });
  };

  const hamburgerClassNames = classNames(styles.hamburger, {
    [styles.active]: isMenuActive,
  });

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>Logo</div>

        <svg
          className={hamburgerClassNames}
          viewBox="0 0 100 100"
          width="60"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <path
            className={`${styles.line} ${styles.top}`}
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            className={`${styles.line} ${styles.middle}`}
            d="m 70,50 h -40"
          />
          <path
            className={`${styles.line} ${styles.bottom}`}
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>

        <nav className={styles.links}>
          <a className={getLinkClassNames('about')} href="/">
            About
          </a>
          <a className={getLinkClassNames('roadmap')} href="#roadmap">
            Roadmap
          </a>
          <a className={getLinkClassNames('socials')} href="#socials">
            Socials
          </a>
        </nav>

        {isMenuActive && (
          <motion.nav
            animate={isMenuActive ? 'open' : 'exit'}
            variants={variants}
            transition={{ ease: "easeOut", duration: .1 }}
            className={styles.mobile_links}
          >
            <a className={getLinkClassNames('about')} href="/">
              About
            </a>
            <a className={getLinkClassNames('roadmap')} href="#roadmap">
              Roadmap
            </a>
            <a className={getLinkClassNames('socials')} href="#socials">
              Socials
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
};
