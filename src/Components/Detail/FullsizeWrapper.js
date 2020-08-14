import React from 'react';
import styled from 'styled-components';
import Reviews from './Reviews';
import HomeLocation from './HomeLocation';
import HostInfo from './HostInfo';
import HomeNotice from './HomeNotice';

const FullsizeWrapper = () => {
  return (
    <StWrapper>
      <Reviews />
      <HomeLocation />
      <HostInfo />
      <HomeNotice />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  background-color: #f5f3ee;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

export default FullsizeWrapper;
