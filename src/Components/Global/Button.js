import React from 'react';
import styled, { css } from 'styled-components';

// btnType: color, underlined, circle, oval
const Button = ({
  children,
  btnType,
  color,
  border,
  width,
  height,
  fontSize,
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
      {...rest}
    >
      {children}
    </StBtn>
  );
};

const hovers = {
  default: css`
    background: #afafaf33;
  `,
  oval: css`
    border: 1px solid #181818;
  `,
};

const hoverStyles = css`
  ${({ btnType, color }) =>
    !color &&
    css`
      &:hover {
        ${(btnType === 'underlined' || !btnType) && hovers.default}
        ${btnType === 'oval' && hovers.oval};
      }
    `}
`;

const borders = btnType => {
  switch (btnType) {
    case 'color':
    case 'underlined':
      return css`
        border: none;
      `;
    case 'oval':
      return css`
        border: 1px solid #bbb;
        border-radius: 30px;
      `;
    case 'circle':
      return css`
        border-radius: 50%;
      `;
    default:
      return css`
        border: 1px solid #181818;
      `;
  }
};

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
      background: ${color};
      color: #fff;
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
  padding: 1rem;
  overflow: hidden;
  ${fontStyles};
  ${borderStyles};
  ${colorStyles};
  ${sizeStyles};
  ${hoverStyles};
`;

export default Button;
