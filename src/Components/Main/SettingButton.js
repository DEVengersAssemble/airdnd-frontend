import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import Button from '../Global/Button';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const StSettingButton = styled(Button)`
  color: ${({ isScrollTop }) =>
    isScrollTop
      ? css`
          ${({ theme }) => theme.white}
        `
      : css`
          ${({ theme }) => theme.black}
        `};
  font-weight: 600;
  font-size: 18px;
  background: transparent;
  border: none;
  &:hover {
    border: none;
    background: rgba(176, 176, 176, 0.25);
    /* background: ${rgba(`${({ theme }) => theme.black}`, 0.25)}; */
  }
  &:focus {
    box-shadow: none;
  }
`;

const SettingButton = ({ isScrollTop }) => {
  return (
    <StSettingButton btnType="oval" isScrollTop={isScrollTop}>
      <FiGlobe style={{ marginRight: '2px' }} />
      <FiChevronDown />
    </StSettingButton>
  );
};

export default SettingButton;
