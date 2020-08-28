import React from 'react';
import styled from 'styled-components';
import HomeCaption from './HomeCard';
import { CkHeart } from '../Global/Heart';
import CarouselContainer from '../../Containers/Global/CarouselContainer';

const HomePopup = ({ home, dateDiff }) => {
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
      <CarouselContainer
        size="large"
        isSuperhost={isSuperhost}
        imageArray={imageArray}
        imageCount={imageCount}
      />
      <HomeCaption
        subTitle={subTitle}
        title={title}
        rating={rating}
        reviewCount={reviewCount}
        price={price}
        dateDiff={dateDiff}
      />
      <Heart ckType checked={isBookmarked} />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 300px;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 1em;
  right: 1.1em;
`;

export default HomePopup;
