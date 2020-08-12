import React from 'react';
import { StBtn } from './Button';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styled, { css } from 'styled-components';

// styleType: transparent, shadowed, plane
const NextButton = ({ styleType, ...rest }) => {
  return (
    <StSlideButton
      styleType={styleType}
      btnType="circle"
      fontSize="2rem"
      {...rest}
    >
      <MdNavigateNext />
    </StSlideButton>
  );
};

const PrevButton = ({ styleType, ...rest }) => {
  return (
    <StSlideButton
      styleType={styleType}
      btnType="circle"
      fontSize="2rem"
      {...rest}
    >
      <MdNavigateBefore />
    </StSlideButton>
  );
};

const styleTypes = {
  transparent: css`
    opacity: 0.8;
    transition: 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.08);
    &:hover {
      transition: 0.3s;
      transform: scale(1.1);
      opacity: 1;
    }
  `,
  shadowed: css`
    transition: 0.3s;
    border: 1px solid #eee;
    box-shadow: 2px 2px 5px #ddd;
    &:hover {
      transition: 0.3s;
      transform: scale(1.1);
      box-shadow: 5px 5px 5px #ddd;
    }
  `,
  plane: css`
    border: none;
    &:hover {
      background: #eee;
    }
  `,
};

const StSlideButton = styled(StBtn)`
  ${({ styleType }) => css`
    ${styleTypes[styleType]};
  `}
`;

export { NextButton, PrevButton };
