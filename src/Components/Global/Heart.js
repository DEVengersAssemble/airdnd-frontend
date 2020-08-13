import React from 'react';
import styled, { css } from 'styled-components';
import { TiHeartFullOutline as HeartIcon } from 'react-icons/ti';

const sizes = {
  large: {
    strokeWidth: '2px',
    fontSize: '3rem',
  },
  medium: {
    strokeWidth: '2px',
    fontSize: '2.5rem',
  },
  small: {
    strokeWidth: '2px',
    fontSize: '2rem',
  },
};

const colors = {
  main: '#FF385C',
  gray: '#717171',
  black: '#222222',
  lightGray: '#F7F7F7',
  white: '#FFFFFF',
  deepgreen: '#01797e',
  green: '#008489',
  darkred: '#C03515',
};

const defaultColorStyles = css`
  ${({ bgColor, stroke }) => css`
    color: ${colors[bgColor]};
    & > svg > path {
      stroke: ${colors[stroke]};
    }
  `}
`;
/* 호버있는하트 ? 호버가트루면 체크드인지?이런디자인:저런디자인 : 호버가펄스면 체크드?다른디자인: 또다른디자인 */
const hoverColorStyles = css`
  ${({ hover, checked }) =>
    hover
      ? checked
        ? css`
            color: ${colors.main};
            & > svg > path {
              stroke: ${colors.main};
            }
          `
        : css`
            color: ${colors.white};
            & > svg > path {
              stroke: ${colors.black};
            }
          `
      : checked
      ? css`
          color: ${colors.main};
          & > svg > path {
            stroke: ${colors.main};
          }
        `
      : css`
          color: ${colors.black};
          & > svg > path {
            stroke: ${colors.white};
          }
        `}
`;

const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    & > svg > path {
      stroke-width: ${sizes[size].strokeWidth};
    }
  `}
`;

const hoverStyles = css`
  ${({ hover }) =>
    hover &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      &:hover {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: ${colors.lightGray};
      }
    `}
`;

// default heart
const StDiv = styled.div`
  ${defaultColorStyles}
  ${sizeStyles}
  ${hoverStyles}
`;
const StHeartLabel = styled.label``;
const StHeartInput = styled.input`
  display: none;
`;

// CkHeartDiv
const StCkDiv = styled.div`
  ${hoverColorStyles}
  ${sizeStyles}
  ${hoverStyles}
`;

const Heart = ({ size, bgColor, stroke, hover, checked }) => {
  return checked ? (
    <StCkDiv
      size={size}
      bgColor={bgColor}
      stroke={stroke}
      hover={hover} // CkHeart의 hover기능 props 여부에 따라 hover 적용, 없으면 무시
      checked={checked} // checked=true, checked=false
    >
      <HeartIcon />
    </StCkDiv>
  ) : (
    <StDiv
      size={size}
      bgColor={bgColor}
      stroke={stroke}
      hover={hover} // CkHeart의 hover기능 props 여부에 따라 hover 적용, 없으면 무시
      checked={checked} // checked=true, checked=false
    >
      <HeartIcon />
    </StDiv>
  );
};

const CkHeart = ({ hover, checked, onChange }) => {
  return (
    <StHeartLabel hover={hover} onChange={onChange}>
      <StHeartInput type="checkbox" />
      {hover ? (
        // hover기능이 있는 defaultHeart
        <Heart size="large" hover={hover} checked={checked} />
      ) : (
        // hover기능이 없는 defaultHeart
        <Heart size="large" checked={checked} />
      )}
    </StHeartLabel>
  );
};

export { Heart, CkHeart };
