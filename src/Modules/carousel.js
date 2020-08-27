const SLIDE_NEXT = 'carousel/SLIDE_NEXT';
const SLIDE_PREV = 'carousel/SLIDE_PREV';
const GET_WIDTH = 'carousel/GET_WIDTH';
const SET_CAROUSEL = 'carousel/SET_CAROUSEL';

export const slideNext = () => ({ type: SLIDE_NEXT });
export const slidePrev = () => ({ type: SLIDE_PREV });
export const getWidth = () => ({ type: GET_WIDTH });
export const setCarousel = state => ({ type: SET_CAROUSEL, state });

// export default carousel;
