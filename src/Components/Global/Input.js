import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import theme from '../../style/theme';

const placeholderStyle = css`
  &::placeholder {
    color: ${darken(0.3, theme.darkGray)};
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const focusStyle = css`
  &:focus {
    border-color: ${({ focusBorderColor }) =>
      focusBorderColor ? theme.green : theme.black};
  }
`;
const borderNone = css`
  ${({ borderNone }) =>
    borderNone &&
    css`
      border: none;
    `}
`;
const StLabel = styled.label`
  width: 100%;
  cursor: pointer;
`;

const StInput = styled.input`
  border: 1px solid ${lighten(0.2, theme.gray)};
  border-radius: 4px;
  padding: 1.6rem 1rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  outline: none;
  ${placeholderStyle};
  ${focusStyle};
  ${borderNone}
`;

const StLabelName = styled.div`
  padding: 1rem 0;
  font-size: 1.6rem;
  font-weight: 400;
`;

const Input = ({
  children,
  borderNone,
  focusBorderColor,
  type,
  placeholder,
}) => {
  return (
    <StLabel>
      {children && <StLabelName>{children}</StLabelName>}
      <StInput
        borderNone={borderNone}
        focusBorderColor={focusBorderColor}
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
