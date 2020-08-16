import React from 'react';
import Button from './Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled from 'styled-components';

const PlusButton = ({ theme, ...rest }) => {
  return (
    <StCounterButton
      btnType="circle"
      fontSize="1.7rem"
      border={`1px solid ${theme.color.gray}`}
      {...rest}
    >
      <FiPlus strokeWidth="3px" />
    </StCounterButton>
  );
};

const MinusButton = ({ theme, ...rest }) => {
  return (
    <StCounterButton
      btnType="circle"
      fontSize="1.7rem"
      border={`1px solid ${theme.color.gray}`}
      {...rest}
    >
      <FiMinus strokeWidth="3px" />
    </StCounterButton>
  );
};

const StCounterButton = styled(Button)`
  color: ${({ theme }) => theme.color.gray};

  &:hover {
    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.black};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.shadow};
    border: 1px solid ${({ theme }) => theme.color.shadow};
    cursor: not-allowed;
  }
`;

export { PlusButton, MinusButton };
