import React from 'react';
import styled from 'styled-components';
import Carousel from '../Global/Carousel';
import Rating from '../Global/Rating';
import { PrevButton, NextButton } from '../Global/SlideButton';
import { CkHeart } from '../Global/Heart';

const RecentHome = () => {
  return (
    <StWrapper>
      <StPrevBtn styleType="transparent" size="large" />
      <StNextBtn styleType="transparent" size="large" />
      <StHome
        target="_blank"
        href="https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30"
      >
        <Carousel className={'carousel'} size="small" />
        <Rating scale="1.4" rate="4.55" count="67" />
        <StSpan>호텔 객실 Mongmong-Toto</StSpan>
        <StSpan>Clean private shower gold room</StSpan>
      </StHome>
      <Heart ckType checked={false} />
    </StWrapper>
  );
};

const StWrapper = styled.li`
  width: 148px;
  height: 190px;
  position: relative;

  & > * {
    margin-bottom: 0.6rem;
  }

  .carousel {
    margin-bottom: 0.9rem;
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

const StPrevBtn = styled(PrevButton)`
  position: absolute;
  top: calc(105px / 2 - 16px);
  left: 1rem;
  z-index: 5;
`;

const StNextBtn = styled(NextButton)`
  position: absolute;
  top: calc(105px / 2 - 16px);
  left: calc(148px - 1rem - 32px);
  z-index: 5;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 0.7rem;
  right: 0.5rem;
`;

export default RecentHome;
