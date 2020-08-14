import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { MdCheckBox } from 'react-icons/md';
import theme from '../../style/theme';

const dragDisable = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const hoverStyle = css`
  border-color: ${theme.black};
  ${({ map }) =>
    map &&
    css`
      color: ${darken(0.4, theme.gray)};
      font-weight: 600;
    `}
`;

const StCheckBoxLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover span {
    ${hoverStyle}
  }

  ${({ value }) =>
    value &&
    css`
      width: 100%;
    `}
`;

const StCheckBoxInput = styled.input`
  display: none;
`;

const StCheckBoxOutLine = styled.span`
  display: inline-block;
  min-width: 2.5rem;
  min-height: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  margin: 0.4rem;
  border: 1px solid ${theme.gray};
  ${({ map }) =>
    map &&
    css`
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 4px;
      margin: 0.4rem;
      border: 1px solid ${theme.gray};
    `}
  &:hover {
    ${hoverStyle}
  }
`;

const StCheckBox = styled(MdCheckBox)`
  font-size: 3.3rem;
  min-width: 3.3rem;
  min-height: 3.3rem;
  ${({ map }) =>
    map &&
    css`
      font-size: 3.3rem;
    `}
`;

const StCheckBoxText = styled.span`
  padding: 0 0.8rem 0 0.8rem;
  font-size: 2rem;
  font-weight: 400;
  vertical-align: 47%;
  ${({ map }) =>
    map &&
    css`
      font-size: 1.7rem;
      font-weight: 600;
      vertical-align: 60%;
    `}
  ${dragDisable}
`;

const Checkbox = ({ children, value, map, checked, ...event }) => {
  return (
    <StCheckBoxLabel map={map} {...event}>
      <StCheckBoxInput type="checkbox" />
      {checked ? <StCheckBox map={map} /> : <StCheckBoxOutLine map={map} />}
      {value && <StCheckBoxText map={map}>{children}</StCheckBoxText>}
    </StCheckBoxLabel>
  );
};

export default Checkbox;
