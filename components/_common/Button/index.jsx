import Image from 'next/image';
import styles from './button.module.css';

const socialMediaIcons = {
  twitter: '/images/twitter.png',
  discord: '/images/discord.png',
};

export const Button = ({ children, bgColor, customClass, social, onClick }) => (
  <button
    style={{ backgroundColor: bgColor }}
    className={`${styles.button} ${!!customClass ? customClass : ''}`}
  >
    {social && (
      <img
        width="30"
        height="30"
        src={socialMediaIcons[social]}
        alt={''}
        className={styles.social_icon}
        onClick={onClick}
      />
    )}
    {children}
  </button>
);
