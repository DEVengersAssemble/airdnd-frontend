import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Carousel from '../Global/Carousel';

const RecentHome = () => {
  return (
    <StWrapper>
      <Carousel size="small" />
      <StSpan>호텔 객실 Mongmong-Toto</StSpan>
      <StSpan>Clean private shower gold room</StSpan>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: calc(100% / 5);
  height: 190px;
`;

const StSpan = styled.span`
  color: ${theme.black};
  font-size: 1.4rem;
`;

export default RecentHome;
