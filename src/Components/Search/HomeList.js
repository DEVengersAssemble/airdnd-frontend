import React from 'react';
import styled, { css } from 'styled-components';

const HomeList = ({ children, mapState }) => {
  return <StWrapper mapState={mapState}>{children}</StWrapper>;
};

const StWrapper = styled.ul`
  & *:nth-child(1) {
    border: none;
  }

  ${({ mapState }) =>
    !mapState &&
    css`
      display: flex;
    `}
`;

export default HomeList;
