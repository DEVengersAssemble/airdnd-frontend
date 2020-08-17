import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';
import { PrevButton, NextButton } from './SlideButton';

const Carousel = ({ size, ...rest }) => {
  return (
    <StWrapper size={size} {...rest}>
      <StBadge>슈퍼호스트</StBadge>
      <StPrevBtn styleType="transparent" />
      <StNextBtn styleType="transparent" />
      <StCircleWrapper>
        <StCircle color="lightGray" />
        <StCircle color="gray" />
        <StCircle color="gray" />
        <StCircle color="gray" />
        <StCircle color="gray" />
      </StCircleWrapper>
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
    height: '105px',
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

const StPrevBtn = styled(PrevButton)`
  position: absolute;
  top: calc(50% - 16px);
  left: 1rem;
`;

const StNextBtn = styled(NextButton)`
  position: absolute;
  top: calc(50% - 16px);
  right: 1rem;
`;

const StCircleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StCircle = styled.div`
  margin: 1rem 0.3rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ color, theme }) => theme[color]};
`;

export default Carousel;
