import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';
import { FaBars } from 'react-icons/fa';

const StMyPageButton = styled(Button)``;

const MyPageButton = () => {
  return (
    <StMyPageButton type="oval">
      <FaBars></FaBars>
    </StMyPageButton>
  );
};

export default MyPageButton;
