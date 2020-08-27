import React, { useState } from 'react';
import Carousel from '../../Components/Global/Carousel';

const CarouselContainer = ({
  size,
  image,
  imageCount,
  isSuperhost,
  getHomeWidth,
}) => {
  const [img, setImg] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [homeWidth, setHomeWidth] = useState(0);

  window.addEventListener('resize', () => {
    size === 'responsive' && setHomeWidth(getHomeWidth());
  });

  const slideNext = () => {
    setImg(img + 1);
    setTransition(true);
    setIsClicked(true);
  };

  const slidePrev = () => {
    setImg(img - 1);
    setTransition(true);
    setIsClicked(true);
  };

  const resetCarousel = () => {
    if (img === imageCount + 1)
      setTimeout(() => {
        setImg(1);
        setTransition(false);
      }, 300);
    if (img === 0)
      setTimeout(() => {
        setImg(imageCount);
        setTransition(false);
      }, 300);
    setIsClicked(false);
  };

  return (
    <Carousel
      img={img}
      setHomeWidth={setHomeWidth}
      getHomeWidth={getHomeWidth}
      homeWidth={homeWidth}
      imagePath={image}
      imageCount={imageCount}
      isSuperhost={isSuperhost}
      isClicked={isClicked}
      transition={transition}
      resetCarousel={resetCarousel}
      slideNext={slideNext}
      slidePrev={slidePrev}
      size={size}
    />
  );
};

export default CarouselContainer;
