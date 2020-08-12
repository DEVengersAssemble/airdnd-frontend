import React from 'react';
import { StBtn } from './Button';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styled from 'styled-components';

const NextButton = () => {
  return (
    <StSlideButton
      btnType="circle"
      fontSize="2rem"
      border="1px solid rgba(0, 0, 0, 0.08)"
    >
      <MdNavigateNext />
    </StSlideButton>
  );
};

const PrevButton = () => {
  return (
    <StSlideButton
      btnType="circle"
      fontSize="2rem"
      border="1px solid rgba(0, 0, 0, 0.08)"
    >
      <MdNavigateBefore />
    </StSlideButton>
  );
};

const StSlideButton = styled(StBtn)`
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export { NextButton, PrevButton };
