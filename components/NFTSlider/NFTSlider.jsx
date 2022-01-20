import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './nft_slider.module.css';

const images = [
  '/images/carousel/rick-1.png',
  '/images/carousel/rick-2.png',
  '/images/carousel/rick-3.png',
  '/images/carousel/rick-4.png',
  '/images/carousel/rick-5.png',
  '/images/carousel/rick-6.png',
  '/images/carousel/rick-7.png',
  '/images/carousel/rick-8.png',
  '/images/carousel/rick-9.png',
  '/images/carousel/rick-10.png',
];

export const NFTSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    lazyLoad: 'progressive',
    centerMode: true,
    pauseOnHover: false,
    swipeToSlide: false,
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
        }
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {images.map((url) => (
          <div key={url} className={styles.image_wrapper}>
            <Image
              src={url}
              alt=""
              width="400"
              height="400"
              className={styles.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
