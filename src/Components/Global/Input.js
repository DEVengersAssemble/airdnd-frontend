import React from 'react';
import styled, { css } from 'styled-components';

const StLabel = styled.label``;
const StInput = styled.input``;
const StDiv = styled.div``;

const Input = () => {
  const value = 'name';
  return (
    <StLabel>
      <StDiv>{value}</StDiv>
      <StInput />
    </StLabel>
  );
};

export default Input;
