import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

// btnType: color(배경색 있는 버튼), underlined(밑줄 있는 버튼), circle(원형 버튼), oval(타원형 버튼)
const Button = ({
  children,
  btnType,
  color,
  border,
  width,
  height,
  fontSize,
  fontWeight,
  padding,
  hover,
  focus,
  transition,
  type,
  ...rest
}) => {
  return (
    <StBtn
      btnType={btnType}
      color={color} // 'black'
      border={border} // 'none', '3px solid gray'
      width={width} // '3rem'
      height={height} // '3rem'
      fontSize={fontSize} // '2rem'
      fontWeight={fontWeight} // '700'
      padding={padding} // '0'
      hover={hover} // 'background: gray'
      focus={focus} // true
      transition={transition} // true
      type={type || 'button'} // 'submit'
      {...rest}
    >
      {children}
    </StBtn>
  );
};

const hovers = btnType => {
  switch (btnType) {
    case undefined:
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
        ${hover ? hover : hovers(btnType)};
      }
    `}
`;

const borderStyles = css`
  ${({ btnType, border }) => css`
    ${borders(btnType)};
    border: ${border && border};
  `}
`;

const fontStyles = css`
  ${({ btnType, fontSize, fontWeight }) => css`
    font-size: ${fontSize || '1.6rem'};
    font-weight: ${fontWeight || '400'};
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
  ${({ btnType, width, height, padding }) => css`
    width: ${btnType === 'circle' ? '32px' : width};
    height: ${btnType === 'circle' ? '32px' : height};
    padding: ${btnType === 'circle' ? '0' : padding ? padding : '1rem 2rem'};
  `}
`;

const focusStyles = css`
  ${({ focus }) =>
    focus &&
    css`
      &:focus {
        box-shadow: 0px 0px 0px 2px ${theme.white},
          0px 0px 0px 4px ${theme.black};
      }
    `}
`;

const transitionStyles = css`
  ${({ transition }) =>
    transition &&
    css`
      transition: 0.2s;
      &:active {
        transform: scale(0.94);
      }
    `}
`;

export const StBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  overflow: hidden;
  ${fontStyles};
  ${colorStyles};
  ${sizeStyles};
  ${borderStyles};
  ${hoverStyles};
  ${focusStyles};
  ${transitionStyles};
`;

export default Button;
