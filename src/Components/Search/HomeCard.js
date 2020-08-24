import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import CarouselContainer from '../../Containers/Global/CarouselContainer';
import Rating from '../Global/Rating';
import { CkHeart } from '../Global/Heart';
import { HomePrice } from './Home';

const HomeCard = ({ home, onClickBookmark, dateDiff }) => {
  const homeRef = useRef();
  const getHomeWidth = () => homeRef.current && homeRef.current.offsetWidth;
  const {
    isSuperhost,
    isBookmarked,
    image,
    imageCount,
    subTitle,
    title,
    rating,
    reviewCount,
    price,
  } = home;

  return (
    <StWrapper ref={homeRef}>
      <CarouselContainer
        size="responsive"
        getHomeWidth={getHomeWidth}
        isSuperhost={isSuperhost}
        image={image}
        imageCount={imageCount}
      />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30"
      >
        <StRating scale="1.4" rate={rating} count={reviewCount} />
        <StSpan>{subTitle}</StSpan>
        <StSpan>{title}</StSpan>
        <HomePrice price={price} dateDiff={dateDiff} type="card" />
      </a>
      <Heart
        ckType
        checked={isBookmarked}
        onClick={() => onClickBookmark(isBookmarked)}
      />
    </StWrapper>
  );
};

export default HomeCard;

const StWrapper = styled.li`
  position: relative;
  padding: 1rem 1rem 3rem;
  width: 20%;

  @media ${({ theme }) => theme.size.large} {
    width: 25%;
  }
  @media ${({ theme }) => theme.size.medium} {
    width: 50%;
  }
`;

const StRating = styled(Rating)`
  margin: 1rem 0 0.3rem;
`;

const StSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
/* 
  ${({ noRate }) =>
    noRate &&
    css`
      color: ${({ theme }) => theme.color.darkGray};
      margin: 1rem 0 0.3rem;
      font-size: 1.4rem;
    `} */
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 1em;
  right: 1.1em;
`;
