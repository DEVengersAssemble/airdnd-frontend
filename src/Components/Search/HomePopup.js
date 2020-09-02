import React from 'react';
import styled from 'styled-components';
import { HomeCaption } from './HomeCard';
import { CkHeart } from '../Global/Heart';
import CarouselContainer from '../../Containers/Global/CarouselContainer';

const HomePopup = ({
  home,
  isHovered,
  theme,
  dateDiff,
  onHoverHome,
  onBlurHome,
  onClickHeart,
}) => {
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
    <StWrapper onMouseOver={onHoverHome} onMouseLeave={onBlurHome}>
      <Carousel
        size="large"
        theme={theme}
        isHovered={isHovered}
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
      <Heart
        ckType
        theme={theme}
        checked={isBookmarked}
        onCheck={onClickHeart}
      />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  background: white;
  position: relative;
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
  top: 0.7rem;
  right: 1.1em;
`;

export default HomePopup;
