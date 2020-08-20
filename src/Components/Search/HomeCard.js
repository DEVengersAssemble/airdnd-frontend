import React from 'react';
import styled from 'styled-components';
import CarouselContainer from '../../Containers/Global/CarouselContainer';
import Rating from '../Global/Rating';
import { CkHeart } from '../Global/Heart';
import { HomePrice } from './Home';

const HomeCard = ({ home, onClickBookmark, dateDiff }) => {
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
    <StWrapper>
      <CarouselContainer
        size="responsive"
        isSuperhost={isSuperhost}
        image={image}
        imageCount={imageCount}
      />
      <StHome
        target="_blank"
        href="https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30"
      >
        <Rating scale="1.4" rate={rating} count={reviewCount} />
        <StSpan>{subTitle}</StSpan>
        <StSpan>{title}</StSpan>
        <HomePrice price={price} dateDiff={dateDiff} />
      </StHome>
      <Heart ckType checked={isBookmarked} onClick={onClickBookmark} />
    </StWrapper>
  );
};

export default HomeCard;

const StWrapper = styled.li`
  /* background: cornflowerblue; */
  position: relative;
  padding: 1rem;
  width: 20%;

  @media ${({ theme }) => theme.size.large} {
    width: 25%;
  }
  @media ${({ theme }) => theme.size.medium} {
    width: 50%;
  }
`;

const StHome = styled.a`
  text-decoration: none;
  width: 100%;
`;

const StSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
  line-height: 1.7rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 1em;
  right: 1.1em;
`;
