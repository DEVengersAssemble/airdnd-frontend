import React from 'react';
import styled from 'styled-components';

const HomeList = ({ children }) => {
  return <StWrapper>{children}</StWrapper>;
};

const StWrapper = styled.ul`
  & *:nth-child(1) {
    border: none;
  }
`;

export default HomeList;
