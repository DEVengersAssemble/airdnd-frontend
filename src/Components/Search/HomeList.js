import React from 'react';
import styled, { css } from 'styled-components';

const HomeList = ({ children, mapState }) => {
  return <StWrapper mapState={mapState}>{children}</StWrapper>;
};

const fullSizeStyle = css`
  ${({ mapState }) =>
    !mapState &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`;

const StWrapper = styled.ul`
  & *:nth-child(1) {
    border: none;
  }

  ${fullSizeStyle}
`;

export default HomeList;
