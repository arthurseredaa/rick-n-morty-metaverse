/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import carousel from '../assets/carousel.json';
import styles from './nft_slider.module.css';

// const images = [
//   '/images/carousel/rick-1.webp',
//   '/images/carousel/rick-2.webp',
//   '/images/carousel/rick-3.webp',
//   '/images/carousel/rick-4.webp',
//   '/images/carousel/rick-5.webp',
//   '/images/carousel/rick-6.webp',
//   '/images/carousel/rick-7.webp',
//   '/images/carousel/rick-8.webp',
//   '/images/carousel/rick-9.webp',
//   '/images/carousel/rick-10.webp',
// ];

export const NFTSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    lazyLoad: 'progressive',
    pauseOnHover: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 1000,
          autoplaySpeed: 1500,
          fade: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {carousel.images.map((url) => (
          <div key={url} className={styles.image_wrapper}>
            <img src={url} alt="" className={styles.image} />
          </div>
        ))}
      </Slider>
      <div className={styles.info}>
        <h1>Awesome collection!</h1>
      </div>
    </div>
  );
};
