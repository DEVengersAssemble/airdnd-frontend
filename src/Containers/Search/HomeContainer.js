import React, { useState } from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = () => {
  const imgCount = 3;
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
    if (img === imgCount + 1)
      setTimeout(() => {
        setImg(1);
        setTransition(false);
      }, 300);
    if (img === 0)
      setTimeout(() => {
        setImg(imgCount);
        setTransition(false);
      }, 300);
    setIsClicked(false);
  };

  return (
    <Home
      img={img}
      isClicked={isClicked}
      transition={transition}
      resetCarousel={resetCarousel}
      slideNext={slideNext}
      slidePrev={slidePrev}
    />
  );
};

export default HomeContainer;
