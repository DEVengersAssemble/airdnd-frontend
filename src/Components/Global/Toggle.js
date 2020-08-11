import React from 'react';
import { MdDone } from 'react-icons/md';

import styled, { css } from 'styled-components';

const StToggleButton = styled.button`
  box-sizing: border-box;
  position: relative;
  padding: 0;
  width: 48px;
  height: 32px;
  border-radius: 28px;
  border: none;
  background: rgb(176, 176, 176);
  cursor: pointer;
  outline: none;
  ${({ checked }) =>
    checked &&
    css`
      background: rgb(34, 34, 34);
    `}

  &:hover {
    background-color: rgb(113, 113, 113);
  }

  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(34, 34, 34) 0px 0px 0px 4px, rgba(255, 255, 255, 0.5) 0px 0px 0px 5px;
    outline: none;
    transition: box-shadow 0.2s ease 0s;
  }
`;

const StToggleCircle = styled.span`
  box-sizing: border-box;
  position: absolute;
  top: 2px;
  left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: white;
  font-size: 28px;
  border-radius: 50%;
  transition: 0.4s;
  ${({ checked }) =>
    checked &&
    css`
      transform: translate3d(16px, 0px, 0px);
      color: rgb(34, 34, 34);
    `};
`;

// eslint-disable-next-line react/prop-types
const Toggle = ({ checked, handleClick }) => {
  return (
    <StToggleButton checked={checked} onClick={handleClick}>
      <StToggleCircle checked={checked}>{checked && <MdDone />}</StToggleCircle>
    </StToggleButton>
  );
};

export default Toggle;
