import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';

const RecentHome = () => {
  return (
    <StWrapper>
      <StSpan>호텔 객실 Mongmong-Toto</StSpan>
      <StSpan>Clean private shower gold room</StSpan>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 160px;
  height: 190px;
`;

const StSpan = styled.span`
  color: ${theme.black};
  font-size: 1.4rem;
`;

export default RecentHome;
