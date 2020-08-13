import React from 'react';
import styled, { css } from 'styled-components';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
/** StHeart
 * <label>
 *   <input />
 *   <div>{checked ? 'check' : 'unchecked'}</div>
 * </label>
 */
const sizes = {
  medium: {
    fontSize: '2.75rem',
  },
  small: {
    fontSize: '2.25rem',
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

  & > svg > path {
    background: white;
    stroke: blue;
    stroke-width: 3px;
  }
`;
const StHeart = ({ size, hover, border, ...rest }) => {
  return (
    <StHeartLabel hover={hover}>
      <StHeartInput {...rest} />
      <StHeartIcon size={size} {...rest}>
        {rest.checked ? <IoIosHeart /> : <IoIosHeartEmpty border={border} />}
      </StHeartIcon>
    </StHeartLabel>
  );
};
const Heart = ({ size, hover, border, position, ...rest }) => (
  <StHeart
    size={size}
    hover={hover}
    border={border}
    position={position}
    {...rest}
  />
);
export default Heart;
