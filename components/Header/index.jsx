/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import styles from './header.module.css';

export const Header = ({ currentPage }) => {
  const getClassNames = (page) => {
    return classNames(styles.link, {
      [styles.active_link]: page === currentPage,
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
          <a className={getClassNames('about')} href="/">
            About
          </a>
          <a className={getClassNames('roadmap')} href="#roadmap">
            Roadmap
          </a>
          <a className={styles.link} href="#socials">
            Socials
          </a>
        </div>
      </div>
    </header>
  );
};
