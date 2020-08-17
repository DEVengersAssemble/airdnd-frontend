import React from 'react';
import Carousel from '../../Components/Global/Carousel';

const CarouselContainer = ({ size, img, transition }) => {
  return <Carousel size={size} img={img} transition={transition} />;
};

export default CarouselContainer;
