import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { TiHeartFullOutline as HeartIcon } from 'react-icons/ti';
import theme from '../../style/theme';

const sizes = {
  large: {
    strokeWidth: '1.5px',
    fontSize: '3rem',
  },
  medium: {
    strokeWidth: '2px',
    fontSize: '2.5rem',
  },
  small: {
    strokeWidth: '3px',
    fontSize: '2rem',
  },
};
const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
  `}
`;
const colorStyles = css`
  ${({ checked }) =>
    checked &&
    css`
      color: ${({ theme }) => theme.palette.main};
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
      line-height: 5rem;
      border-radius: 50%;
      text-align: ;
      &:hover {
        width: 5rem;
        line-height: 5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.palette.lightGray};
      }
    `}
`;
const borderStyles = css``;
const StHeartLabel = styled.label`
  /* common */
  /* hover */
  ${hoverStyles}
`;
const StHeartInput = styled.input`
  /* common */
  display: none;
`;
const StHeartIcon = styled.span`
  /* common */
  cursor: pointer;
  /* size */
  ${sizeStyles}
  /* color */
  ${colorStyles}
  ${borderStyles}
`;

const defaultColorStyles = css`
  ${({ bgColor, stroke, ckType, checked }) =>
    ckType
      ? checked
        ? css`
            color: ${theme.main};
            & > svg > path {
              stroke: ${theme.white};
            }
          `
        : css`
            color: ${rgba(theme.black, 0.5)};
            & > svg > path {
              stroke: ${theme.white};
            }
          `
      : css`
          color: ${theme[bgColor]};
          & > svg > path {
            stroke: ${theme[stroke]};
          }
        `}
`;

const hoverColorStyles = css`
  ${({ hover, checked }) =>
    hover && checked
      ? css`
          color: ${theme.main};
          & > svg > path {
            stroke: ${theme.main};
          }
        `
      : css`
          color: ${theme.white};
          & > svg > path {
            stroke: ${theme.black};
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
        background-color: ${theme.lightGray};
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

const Heart = ({ size, bgColor, stroke, ckType, hover, checked }) => {
  return hover ? (
    <StCkDiv // hover={true}
      size={size}
      bgColor={bgColor}
      stroke={stroke}
      ckType={ckType}
      hover={hover} // CkHeart의 hover기능 props 여부에 따라 hover 적용, 없으면 무시
      checked={checked} // checked=true, checked=false
    >
      <HeartIcon />
    </StCkDiv>
  ) : (
    <StDiv // default heart
      size={size}
      bgColor={bgColor}
      stroke={stroke}
      ckType={ckType}
      hover={hover} // hover={false}
      checked={checked}
    >
      <HeartIcon />
    </StDiv>
  );
};

const CkHeart = ({ ckType, hover, checked, ...event }) => {
  return (
    <StHeartLabel hover={hover} {...event}>
      <StHeartInput type="checkbox" />
      {hover ? (
        // hover=true
        <Heart size="large" ckType={ckType} hover={hover} checked={checked} />
      ) : (
        // hover=false
        <Heart size="large" ckType={ckType} checked={checked} />
      )}
    </StHeartLabel>
  );
};

export { Heart, CkHeart };

/**
  <HeartGroup>
    <Heart size="small" bgColor="main" />
    <Heart size="medium" bgColor="main" />
    <Heart size="large" bgColor="main" />
  </HeartGroup>
  <HeartGroup>
    <Heart size="small" bgColor="white" stroke="black" />
    <Heart size="medium" bgColor="white" stroke="black" />
    <Heart size="large" bgColor="white" stroke="black" />
  </HeartGroup>
  <HeartGroup>
    <Heart size="small" bgColor="main" stroke="white" />
    <Heart size="medium" bgColor="main" stroke="white" />
    <Heart size="large" bgColor="main" stroke="white" />
  </HeartGroup>
  <HeartGroup>
    <CkHeart hover={true} checked={check} onChange={onChangeHeart} />
  </HeartGroup>
  <HeartGroup>
    <CkHeart
      size="large"
      ckType={true}
      hover={false}
      checked={check}
      onChange={onChangeHeart}
    />
  </HeartGroup>
 */
