import React from 'react';
import styled from 'styled-components';
import Carousel from '../Global/Carousel';
import Rating from '../Global/Rating';

const RecentHome = () => {
  return (
    <StWrapper>
      <Carousel className={'carousel'} size="small" />
      <Rating scale="1.4" rate="4.55" count="67" />
      <StSpan>호텔 객실 Mongmong-Toto</StSpan>
      <StSpan>Clean private shower gold room</StSpan>
    </StWrapper>
  );
};

const StWrapper = styled.li`
  width: 148px;
  height: 190px;

  & > * {
    margin-bottom: 0.6rem;
  }

  .carousel {
    margin-bottom: 0.9rem;
  }
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

export default RecentHome;
