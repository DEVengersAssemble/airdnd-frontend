import React, { useState } from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = () => {
  const [img, setImg] = useState(1);

  const slideNext = () => {
    setImg(img + 1);
  };

  const slidePrev = () => {
    setImg(img - 1);
  };

  return <Home img={img} slideNext={slideNext} slidePrev={slidePrev} />;
};

export default HomeContainer;
