import React, { useState } from 'react';
import Carousel from '../../Components/Global/Carousel';

const CarouselContainer = ({ image, imageCount, size, isSuperhost }) => {
  const [img, setImg] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

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
      imagePath={image}
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
