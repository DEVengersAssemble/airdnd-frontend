import React, { useState, useReducer } from 'react';
import Carousel from '../../Components/Global/Carousel';

const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'SLIDE_NEXT':
      return {
        ...state,
        nextIndex: state.currentIndex,
        prevIndex:
          state.prevIndex - 1 >= 0 ? state.prevIndex - 1 : state.imageCount - 1,
        currentIndex: state.prevIndex,
        renderArray: [state.prevIndex, state.currentIndex],
      };
    case 'SLIDE_PREV':
      return {
        ...state,
        nextIndex:
          state.nextIndex + 1 < state.imageCount ? state.nextIndex + 1 : 0,
        prevIndex: state.currentIndex,
        currentIndex: state.nextIndex,
        renderArray: [state.currentIndex, state.nextIndex],
      };
    default:
      return state;
  }
};

const CarouselContainer = ({
  size,
  imageArray,
  imageCount,
  isSuperhost,
  getHomeWidth,
}) => {
  const carouselInit = {
    imageCount,
    nextIndex: imageCount > 1 ? 1 : null,
    prevIndex: imageCount - 1,
    currentIndex: 0,
    renderArray: [],
    width: 0,
    color: '',
  };
  const [carouselState, dispatch] = useReducer(carouselReducer, carouselInit);
  const { prevIndex, nextIndex, currentIndex } = carouselState;
  const renderArray = [
    imageArray[prevIndex],
    imageArray[currentIndex],
    imageArray[nextIndex],
  ];
  const onSlideNext = () => dispatch({ type: 'SLIDE_NEXT' });
  const onSlidePrev = () => dispatch({ type: 'SLIDE_PREV' });

  const [homeWidth, setHomeWidth] = useState(0);

  window.addEventListener('resize', () => {
    size === 'responsive' && setHomeWidth(getHomeWidth());
  });

  return (
    <Carousel
      size={size}
      renderArray={renderArray}
      setHomeWidth={setHomeWidth}
      getHomeWidth={getHomeWidth}
      homeWidth={homeWidth}
      imageArray={imageArray}
      imageCount={imageCount}
      isSuperhost={isSuperhost}
      onSlideNext={onSlideNext}
      onSlidePrev={onSlidePrev}
    />
  );
};

export default CarouselContainer;
