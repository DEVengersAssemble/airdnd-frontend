import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Carousel = ({ size }) => {
  return <StWrapper size={size}></StWrapper>;
};

const sizes = {
  large: {
    width: '300px',
    height: '200px',
  },
  medium: {
    width: '270px',
    height: '180px',
  },
  small: {
    width: '155px',
    height: '107px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
  `}
`;

const StWrapper = styled.div`
  border: 1px solid ${theme.lightGray};
  border-radius: 8px;
  background: pink;

  ${sizeStyles};
`;

export default Carousel;
