import React from 'react';
import { StBtn } from './Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled from 'styled-components';

const PlusButton = ({ ...rest }) => {
  return (
    <StCounterButton
      btnType="circle"
      fontSize="1.7rem"
      border="1px solid rgba(0, 0, 0, 0.08)"
      {...rest}
    >
      <FiPlus strokeWidth="3px" />
    </StCounterButton>
  );
};

const MinusButton = ({ ...rest }) => {
  return (
    <StCounterButton
      btnType="circle"
      fontSize="1.7rem"
      border="1px solid rgba(0, 0, 0, 0.08)"
      {...rest}
    >
      <FiMinus strokeWidth="3px" />
    </StCounterButton>
  );
};

const StCounterButton = styled(StBtn)`
  color: gray;

  &:hover {
    color: black;
    border: 1px solid black;
  }

  &:disabled {
    color: lightgray;
    border: 1px solid lightgray;
    cursor: not-allowed;
  }
`;

export { PlusButton, MinusButton };
