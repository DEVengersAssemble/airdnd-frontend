import React from 'react';
import styled from 'styled-components';
import LuckyChance from '../Global/LuckyChance';

const StWrapper = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
`;

const StLeftWrapper = styled.div`
  width: 58%;
`;

const StTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.125em;
`;

const HouseRules = () => {
  return (
    <StWrapper>
      <StLeftWrapper>
        <StTitle>숙소 이용규칙 확인하기</StTitle>
        <LuckyChance />
      </StLeftWrapper>
    </StWrapper>
  );
};

export default HouseRules;
