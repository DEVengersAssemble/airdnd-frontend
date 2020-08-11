import React from 'react';
import styled, { css } from 'styled-components';

const fontStyles = css`
  ${({ fontSize }) => css`
    font-size: fontSize;
  `}
`;

const borderStyles = css`
  ${({ border }) => css`
    border: border;
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

const StBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  border: 1px solid #181818;
  padding: 1rem;
  ${fontStyles};
  ${borderStyles};
`;

const StColorBtn = styled(StBtn)`
  border: none;
  ${colorStyles};
  ${fontStyles};
  ${borderStyles};
`;

const StUnderlinedBtn = styled(StBtn)`
  border: none;
  text-decoration: underline;
  ${fontStyles};
  ${borderStyles};
`;

const StOvalBtn = styled(StBtn)`
  border-radius: 30px;
  ${fontStyles};
  ${borderStyles};
`;

const StCircleBtn = styled(StBtn)`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  /* box-shadow: 1px 1px 5px 0 #ddd; */
  ${fontStyles};
  ${borderStyles};
  ${colorStyles};
`;

const StButton = ({ children, border, width, height, fontSize }) => {
  return (
    <StBtn border={border} width={width} height={height} fontSize={fontSize}>
      {children}
    </StBtn>
  );
};

const StUnderlinedButton = ({ children, border, width, height, fontSize }) => {
  return (
    <StUnderlinedBtn
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </StUnderlinedBtn>
  );
};

const StCircleButton = ({
  children,
  color,
  border,
  width,
  height,
  fontSize,
}) => {
  return (
    <StCircleBtn
      color={color}
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </StCircleBtn>
  );
};

const StOvalButton = ({ children, border, width, height, fontSize }) => {
  return (
    <StOvalBtn
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </StOvalBtn>
  );
};

const StColorButton = ({
  children,
  color,
  border,
  width,
  height,
  fontSize,
}) => {
  return (
    <StColorBtn
      color={color}
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </StColorBtn>
  );
};

StButton.defaultProps = {
  border: '1px solid #181818',
  fontSize: '1.6rem',
};

StCircleButton.defaultProps = {
  width: '32px',
  height: '32px',
};

export {
  StButton,
  StColorButton,
  StUnderlinedButton,
  StCircleButton,
  StOvalButton,
};
