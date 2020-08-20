import React from 'react';
import styled from 'styled-components';

const StWrapper = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
`;

const StTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.125em;
`;

const HouseRules = () => {
  return (
    <StWrapper>
      <StTitle>숙소 이용규칙 확인하기</StTitle>
    </StWrapper>
  );
};

export default HouseRules;
