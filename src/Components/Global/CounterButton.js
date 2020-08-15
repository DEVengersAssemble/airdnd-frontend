import React from 'react';
import Button from './Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled from 'styled-components';
import theme from '../../style/theme';

const PlusButton = ({ ...rest }) => {
  return (
    <StCounterButton
      btnType="circle"
      fontSize="1.7rem"
      border={`1px solid ${theme.gray}`}
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
      border={`1px solid ${theme.gray}`}
      {...rest}
    >
      <FiMinus strokeWidth="3px" />
    </StCounterButton>
  );
};

const StCounterButton = styled(Button)`
  color: ${theme.gray};

  &:hover {
    color: ${theme.black};
    border: 1px solid ${theme.black};
  }

  &:disabled {
    color: ${theme.shadow};
    border: 1px solid ${theme.shadow};
    cursor: not-allowed;
  }
`;

export { PlusButton, MinusButton };
