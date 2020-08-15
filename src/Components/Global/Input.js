import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import theme from '../../style/theme';

const hoverStyle = css`
  &:hover {
    border-color: ${({ borderColor }) =>
      borderColor ? theme.green : theme.black};
  }
`;

const StLabel = styled.label`
  width: 100%;
`;

const StInput = styled.input`
  border: 1px solid ${lighten(0.2, theme.gray)};
  ${hoverStyle};
  border-radius: 4px;
  padding: 1.6rem 1rem;
  width: 100%;
  &::placeholder {
    color: ${darken(0.3, theme.darkGray)};
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const StLabelName = styled.div`
  padding: 1rem 0;
  font-size: 1.6rem;
`;

const Input = ({ children, borderColor, type, placeholder }) => {
  return (
    <StLabel>
      {children && <StLabelName>{children}</StLabelName>}
      <StInput
        borderColor={borderColor}
        type={type}
        placeholder={placeholder}
      />
    </StLabel>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
