import React, { useState, useReducer, useEffect } from 'react';
import Carousel from '../../Components/Global/Carousel';

const getMarkerIndex = (imageCount, currentIndex) => {
  if (imageCount <= 5) return currentIndex;
  if (currentIndex >= 2 && currentIndex < imageCount - 2) return 2;
  if (currentIndex >= imageCount - 2) return 5 - (imageCount - currentIndex);
  return currentIndex;
};

const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'SLIDE_NEXT':
      return {
        ...state,
        nextIndex:
          state.nextIndex + 1 < state.imageCount ? state.nextIndex + 1 : 0,
        prevIndex: state.currentIndex,
        currentIndex: state.nextIndex,
        renderArray: [state.currentIndex, state.nextIndex],
        direction: 'right',
        isSliding: true,
      };
    case 'SLIDE_PREV':
      return {
        ...state,
        nextIndex: state.currentIndex,
        prevIndex:
          state.prevIndex - 1 >= 0 ? state.prevIndex - 1 : state.imageCount - 1,
        currentIndex: state.prevIndex,
        renderArray: [state.prevIndex, state.currentIndex],
        direction: 'left',
        isSliding: true,
      };
    case 'END_SLIDE':
      return {
        ...state,
        renderArray: [state.currentIndex],
        isSliding: false,
      };
    case 'GET_MARKER':
      return { ...state, marker: action.marker };
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
    isSliding: false,
    nextIndex: imageCount > 1 ? 1 : null,
    prevIndex: imageCount > 1 ? imageCount - 1 : null,
    currentIndex: 0,
    renderArray: [0],
    direction: '',
    width: 0,
    marker: 0,
  };
  const [carouselState, dispatch] = useReducer(carouselReducer, carouselInit);
  const {
    isSliding,
    direction,
    renderArray,
    marker,
    currentIndex,
  } = carouselState;
  const onSlideNext = () => dispatch({ type: 'SLIDE_NEXT' });
  const onSlidePrev = () => dispatch({ type: 'SLIDE_PREV' });

  const [homeWidth, setHomeWidth] = useState(0);

  window.addEventListener('resize', () => {
    size === 'responsive' && setHomeWidth(getHomeWidth());
  });

  useEffect(() => {
    dispatch({
      type: 'GET_MARKER',
      marker: getMarkerIndex(imageCount, currentIndex),
    });
    setTimeout(() => isSliding && dispatch({ type: 'END_SLIDE' }), 300);
  }, [isSliding, currentIndex]);

  return (
    <Carousel
      size={size}
      marker={marker}
      direction={direction}
      isSliding={isSliding}
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
