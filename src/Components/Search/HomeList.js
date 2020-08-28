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
      margin: 0 -1rem;
      padding-top: 1rem;

      &:after {
        content: '';
        flex: auto;
      }
    `}
`;

const StWrapper = styled.ul`
  & *:nth-child(1) {
    border: none;
  }

  ${fullSizeStyle}
`;

export default HomeList;
