import React, { useState, useEffect, useReducer } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../../Components/Global/Carousel';
// import { setCarousel, slideNext, slidePrev } from '../../Modules/carousel';
// unmountComponentAtNode()

const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'SLIDE_NEXT':
      return {
        ...state,
        nextIndex:
          state.currentIndex + 1 < state.imageCount
            ? state.currentIndex + 2
            : 0,
        currentIndex: state.nextIndex,
      };
    case 'SLIDE_PREV':
      return {
        ...state,
        prevIndex:
          state.currentIndex - 1 <= 0
            ? state.imageCount - 1
            : state.currentIndex - 2,
        currentIndex: state.nextIndex,
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
    imageCount: 0,
    nextIndex: imageCount > 1 ? 1 : null,
    prevIndex: imageCount - 1,
    currentIndex: 0,
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
  // const { nextIndex, prevIndex, currentIndex, width } = useSelector(
  //   state => state.carousel,
  // );
  // const dispatch = useDispatch();
  // const onSetCarousel = state => dispatch(setCarousel(state));
  const onSlideNext = () => dispatch({ type: 'SLIDE_NEXT' });
  const onSlidePrev = () => dispatch({ type: 'SLIDE_PREV' });

  // const [img, setImg] = useState(1);
  // const [transition, setTransition] = useState(true);
  // const [isClicked, setIsClicked] = useState(false);
  const [homeWidth, setHomeWidth] = useState(0);

  window.addEventListener('resize', () => {
    size === 'responsive' && setHomeWidth(getHomeWidth());
  });

  // const onSlideNext = () => {
  // setImg(img + 1);
  // setTransition(true);
  // setIsClicked(true);
  // };

  // const onSlidePrev = () => {
  // setImg(img - 1);
  // setTransition(true);
  // setIsClicked(true);
  // };

  // const resetCarousel = () => {
  // if (img === imageCount + 1)
  //   setTimeout(() => {
  //     setImg(1);
  //     setTransition(false);
  //   }, 300);
  // if (img === 0)
  //   setTimeout(() => {
  //     setImg(imageCount);
  //     setTransition(false);
  //   }, 300);
  // setIsClicked(false);
  // };

  // useEffect(() => {
  //   dispatch(setCarousel({}))
  // }, [])

  return (
    <Carousel
      // img={img}
      // isClicked={isClicked}
      // transition={transition}
      // currentIndex={currentIndex}
      // nextIndex={nextIndex}
      // prevIndex={prevIndex}
      renderArray={renderArray}
      setHomeWidth={setHomeWidth}
      getHomeWidth={getHomeWidth}
      homeWidth={homeWidth}
      imageArray={imageArray}
      imageCount={imageCount}
      isSuperhost={isSuperhost}
      // onSetCarousel={onSetCarousel}
      onSlideNext={onSlideNext}
      onSlidePrev={onSlidePrev}
      size={size}
    />
  );
};

export default CarouselContainer;
