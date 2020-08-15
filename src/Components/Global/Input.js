import React from 'react';
import styled, { css, keyframes } from 'styled-components';
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

const nameMove = keyframes`
  100% {
    position: relative;
    top: -0.6rem;
    left: 0.1rem;
    color: ${darken(0.6, theme.gray)};
    font-size: 1.2rem;
    font-weight: 200;
  }
`;

const StSearchLabel = styled.label`
  width: 100%;
  padding: 1.6rem 1rem 0rem;
  border: 1px solid ${theme.gray};
  border-radius: 8px;
  &:focus-within {
    border: 1px solid ${theme.black};
  }
  &:focus-within div {
    animation-name: ${nameMove};
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-fill-mode: both;
  }
`;

const StSearchInput = styled.input`
  background: none;
  position: relative;
  top: -1rem;
  width: 100%;
  border: none;
  font-size: 1.5rem;
  font-weight: 300;
  outline: none;
`;

const StSearchName = styled.div`
  color: ${darken(0.5, theme.gray)};
  font-weight: 200;
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

const SearchInput = ({ text, type, placeholder }) => {
  return (
    <>
      <StSearchLabel>
        <StSearchName>{text}</StSearchName>
        <StSearchInput type={type} placeholder={placeholder} />
      </StSearchLabel>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

SearchInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export { Input, SearchInput };
