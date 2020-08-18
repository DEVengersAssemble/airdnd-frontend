import React from 'react';
import styled from 'styled-components';
import HomeContainer from '../../Containers/Search/HomeContainer';

const HomeList = () => {
  return (
    <StWrapper>
      <HomeContainer />
      <HomeContainer />
      <HomeContainer />
    </StWrapper>
  );
};

const StWrapper = styled.ul`
  & *:nth-child(1) {
    border: none;
  }
`;

export default HomeList;
