import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const StSettingButton = styled(Button)`
  color: white;
  font-weight: bold;
  font-size: 18px;
  background: transparent;
  border: none;
  &:hover {
    border: none;
    background: rgba(176, 176, 176, 0.4);
  }
`;

const SettingButton = () => {
  return (
    <StSettingButton btnType="oval">
      <FiGlobe style={{ 'margin-right': '2px' }} />
      <FiChevronDown />
    </StSettingButton>
  );
};

export default SettingButton;
