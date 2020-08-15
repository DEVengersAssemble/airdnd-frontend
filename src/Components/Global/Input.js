import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import theme from '../../style/theme';

const borderStyle = css`
  border: 1px solid
    ${({ message }) =>
      message ? darken(0.1, theme.gray) : lighten(0.2, theme.gray)};
  border-radius: ${({ message }) => (message ? '2.2rem' : '4px')};
  padding: ${({ message }) => (message ? '1.3rem 1.5rem' : '1.6rem 1rem')};
`;

const placeholderStyle = css`
  &::placeholder {
    color: ${darken(0.3, theme.darkGray)};
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const focusStyle = css`
  ${({ borderNone }) =>
    !borderNone &&
    css`
      &:focus {
        ${({ message }) =>
          message &&
          css`
            border: 2px solid ${theme.black};
          `};
        border-color: ${({ focusBorderColor }) =>
          focusBorderColor ? theme.green : theme.black};
      }
    `};
`;

const borderNone = css`
  border: ${({ borderNone }) => borderNone && 'none'};
`;

const StLabel = styled.label`
  width: 100%;
  cursor: pointer;
`;

const StInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  outline: none;
  ${placeholderStyle};
  ${borderStyle};
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
  message,
  short,
  borderNone,
  focusBorderColor,
  type,
  placeholder,
}) => {
  return (
    <StLabel short={short}>
      {children && <StLabelName>{children}</StLabelName>}
      <StInput
        short={short}
        message={message}
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
