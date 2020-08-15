import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import theme from '../../style/theme';

const hoverStyle = css`
  &:hover {
    border-color: ${theme.green};
  }
`;

const StLabel = styled.label`
  width: 100%;
`;

const StInput = styled.input`
  border: 1px solid ${lighten(0.2, theme.gray)};
  ${hoverStyle};
  border-radius: 4px;
  padding: 1rem;
  width: 100%; /* full design, search design */
`;

const StLabelDiv = styled.div``;

const Input = ({ children, type, value, placeholder }) => {
  return (
    <StLabel>
      <StLabelDiv>{children}</StLabelDiv>
      <StInput type={type} value={value} placeholder={placeholder} />
    </StLabel>
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
};

export default Input;
