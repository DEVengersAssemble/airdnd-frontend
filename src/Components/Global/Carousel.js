import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Carousel = () => {
  return <StWrapper></StWrapper>;
};

const StWrapper = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid ${theme.lightGray};
  border-radius: 8px;
  background: pink;
`;

export default Carousel;
