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
    homeId,
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
        homeId={homeId}
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
  background: transparent;
  position: relative;
  width: 320px;
  height: fit-content;
  padding: 1.5rem;
  top: 1.5rem;
  right: 1.5rem;
`;

const Carousel = styled(CarouselContainer)`
  border-radius: 8px 8px 0 0;
`;

const Caption = styled(HomeCaption)`
  display: block;
  padding: 0.5rem 2rem 2rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0 0 8px 8px;
  margin-right: -1rem;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 2rem;
  right: 1.1em;
`;

export default HomePopup;
