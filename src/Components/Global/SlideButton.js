import React from 'react';
import { StBtn } from './Button';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

// styleType: transparent, plane
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
    &:hover {
      opacity: 1;
    }
  `,
  plane: css`
    border: none;
    &:hover {
      background: ${theme.lightGray};
    }
    &:disabled {
      cursor: not-allowed;
    }
  `,
};

const StSlideButton = styled(StBtn)`
  ${({ styleType }) => css`
    ${styleTypes[styleType]};
    ${styleType !== 'plane' &&
    css`
      border: 1px solid ${theme.shadow};
      box-shadow: 0px 0px 2px ${theme.shadow};
      transition: 0.3s;
      &:hover {
        box-shadow: 0px 0px 10px ${theme.shadow};
        transition: 0.3s;
        transform: scale(1.1);
      }
    `}
  `};
`;

export { NextButton, PrevButton };
