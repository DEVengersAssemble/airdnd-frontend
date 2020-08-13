import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

// btnType: color, underlined, circle, oval
const Button = ({
  children,
  btnType,
  color,
  border,
  width,
  height,
  fontSize,
  hover,
  ...rest
}) => {
  return (
    <StBtn
      btnType={btnType}
      color={color}
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
      hover={hover}
      {...rest}
    >
      {children}
    </StBtn>
  );
};

const hovers = btnType => {
  switch (btnType) {
    case 'color':
    case 'underlined':
      return css`
        background: ${theme.lightGray};
      `;
    case 'oval':
      return css`
        border: 1px solid ${theme.black};
      `;
    case 'circle':
      return css`
        border-radius: 50%;
      `;
    default:
      return null;
  }
};

const borders = btnType => {
  switch (btnType) {
    case 'color':
    case 'underlined':
      return css`
        border: none;
      `;
    case 'oval':
      return css`
        border: 1px solid ${theme.gray};
        border-radius: 30px;
      `;
    case 'circle':
      return css`
        border-radius: 50%;
      `;
    default:
      return css`
        border: 1px solid ${theme.black};
      `;
  }
};

const hoverStyles = css`
  ${({ btnType, hover }) =>
    css`
      &:hover {
        ${hovers(btnType)};
      }
      ${hover &&
      css`
        &:hover {
          ${hover}
        }
      `}
    `}
`;

const borderStyles = css`
  ${({ btnType, border }) => css`
    ${borders(btnType)};
    border: ${border && border};
  `}
`;

const fontStyles = css`
  ${({ btnType, fontSize }) => css`
    font-size: ${fontSize};
    text-decoration: ${btnType === 'underlined' && 'underline'};
  `}
`;

const colorStyles = css`
  ${({ color }) =>
    color &&
    css`
      background: ${theme[color] || 'transparent'};
      color: ${theme.white};
      border: none;
    `}
`;

const sizeStyles = css`
  ${({ btnType, width, height }) => css`
    ${
      btnType === 'circle' &&
      css`
        width: 32px;
        height: 32px;
        padding: 0;
      `
    }
    width: ${width};
    height: ${height};
  `}
`;

export const StBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  overflow: hidden;
  ${fontStyles};
  ${colorStyles};
  ${sizeStyles};
  ${borderStyles};
  ${hoverStyles};

  &:focus {
    box-shadow: 0px 0px 0px 2px ${theme.white}, 0px 0px 0px 4px ${theme.black};
  }
`;

export default Button;
