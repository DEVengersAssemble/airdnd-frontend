import React, { useRef } from 'react';
import styled from 'styled-components';
import CarouselContainer from '../../Containers/Global/CarouselContainer';
import Rating from '../Global/Rating';
import { CkHeart } from '../Global/Heart';
import { HomePrice } from './Home';

export const HomeCaption = ({
  theme,
  subTitle,
  title,
  rating,
  reviewCount,
  price,
  dateDiff,
  ...rest
}) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30"
      {...rest}
    >
      <StRating scale="1.4" rate={rating} count={reviewCount} theme={theme} />
      <StSpan>{subTitle}</StSpan>
      <StSpan>{title}</StSpan>
      <HomePrice price={price} dateDiff={dateDiff} type="card" theme={theme} />
    </a>
  );
};

const HomeCard = ({ home, type, onClickBookmark, dateDiff }) => {
  const homeRef = useRef();
  const getWidth = () => homeRef.current && homeRef.current.offsetWidth;

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
    <StWrapper ref={homeRef} type={type}>
      <CarouselContainer
        responsive
        getWidth={getWidth}
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
      <Heart
        ckType
        checked={isBookmarked}
        onClick={() => onClickBookmark(isBookmarked)}
      />
    </StWrapper>
  );
};

export default HomeCard;

const getWidth = (size, type, mapState) => {
  switch (true) {
    case !size && type && mapState:
      console.log('148px');
      return '148px';
    case !size && type && !mapState:
      console.log('25%');
      return '25%';
    case size === 'large' && !type:
      console.log('25%');
      return '25%';
    case size === 'large' && type && mapState:
      console.log('148px');
      return '148px';
    case size === 'large' && type:
      console.log('33%');
      return '50%';
    case size === 'medium' || type:
      console.log('50%');
      return '50%';
    default:
      return '20%';
  }
};

const StWrapper = styled.li`
  position: relative;
  padding: 1rem 1rem 3rem;
  width: 20%;
  width: ${({ type, mapState }) => type && mapState && '148px'};

  @media ${({ theme }) => theme.size.large} {
    width: 25%;
    width: ${({ type, mapState }) => (type && mapState ? '50%' : '33%')};
  }
  @media ${({ theme }) => theme.size.medium} {
    width: 50%;
    /* width: ${({ type, mapState }) => (type && mapState ? '50%' : '33%')}; */
  }
`;

const StRating = styled(Rating)`
  margin: 1rem 0 0.3rem;
`;

const StSpan = styled.span`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 1em;
  right: 1.1em;
`;
