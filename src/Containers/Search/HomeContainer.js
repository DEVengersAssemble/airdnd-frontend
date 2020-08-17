import React, { useState } from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = () => {
  const imgCount = 3;
  const [img, setImg] = useState(1);
  const [direction, setDirection] = useState('');

  const slideNext = () => {
    setImg(img + 1);
    setDirection('right');
  };

  const slidePrev = () => {
    setImg(img - 1);
    setDirection('left');
  };

  const resetCarousel = () => {
    if (img === imgCount && direction === 'right')
      setTimeout(() => setImg(1), 500);
    if (img === 0 && direction === 'left')
      setTimeout(() => setImg(imgCount), 500);
  };

  return (
    <Home
      img={img}
      resetCarousel={resetCarousel}
      slideNext={slideNext}
      slidePrev={slidePrev}
    />
  );
};

export default HomeContainer;
