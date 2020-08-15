import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Carousel = ({ size, ...rest }) => {
  return (
    <StWrapper size={size} {...rest}>
      <StBadge>슈퍼호스트</StBadge>
    </StWrapper>
  );
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
    width: '148px',
    height: '97px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
  `}
`;

const StWrapper = styled.div`
  position: relative;
  border: 1px solid ${theme.lightGray};
  border-radius: 8px;
  background: pink;

  ${sizeStyles};
`;

const StBadge = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${theme.lightGray};
  border-radius: 3px;
  padding: 0.2rem 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  top: 1rem;
  left: 1rem;
`;
export default Carousel;
