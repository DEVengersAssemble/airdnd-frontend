import React from 'react';
import Home from './Home';
import styled from 'styled-components';

const HomeList = () => {
  return (
    <StWrapper>
      <Home />
      <Home />
      <Home />
      <Home />
    </StWrapper>
  );
};

const StWrapper = styled.ul`
  & *:nth-child(1) {
    border: none;
  }
`;

export default HomeList;
