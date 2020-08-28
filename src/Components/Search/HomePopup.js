import React from 'react';
import styled from 'styled-components';
import { HomeCaption } from './HomeCard';
import { CkHeart } from '../Global/Heart';
import CarouselContainer from '../../Containers/Global/CarouselContainer';

const HomePopup = ({ home, dateDiff, theme }) => {
  const {
    isSuperhost,
    isBookmarked,
    imageArray,
    imageCount,
    subTitle,
    title,
    rating,
    reviewCount,
    price,
  } = home;
  return (
    <StWrapper>
      <Carousel
        size="large"
        theme={theme}
        isSuperhost={isSuperhost}
        imageArray={imageArray}
        imageCount={imageCount}
      />
      <Caption
        theme={theme}
        subTitle={subTitle}
        title={title}
        rating={rating}
        reviewCount={reviewCount}
        price={price}
        dateDiff={dateDiff}
      />
      <Heart ckType theme={theme} checked={isBookmarked} />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  background: white;
  position: relative;
  top: -18px;
  width: 300px;
  height: fit-content;
  border-radius: 8px;
`;

const Carousel = styled(CarouselContainer)`
  border-radius: 8px 8px 0 0;
`;

const Caption = styled(HomeCaption)`
  display: block;
  padding: 0.5rem 2rem 2rem;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 2.2em;
  right: 1.1em;
`;

export default HomePopup;
