import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

const StDropDownWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => props.width || '200px'};
  background: rgb(255, 255, 255);
  z-index: 0;
`;

const StDropDownSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 10px;
  -o-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 4px;
  text-indent: 5px;
  &:focus {
    border: 1px solid #0ca678;
    border-radius: 4px;
  }
`;

const StDropDownOption = styled.option`
  box-sizing: border-box;
  display: block;
  white-space: pre;
  min-height: 12px;
  padding: 0px 2px 1px;
`;

const StDropDownIconWrapper = styled.span`
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
  width: 20px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: -1;
`;

const DropDownWithFocus = ({ width, name, title, options }) => {
  return (
    <StDropDownWrapper width={width}>
      <StDropDownSelect name={name}>
        <StDropDownOption disabled>{title}</StDropDownOption>
        {options.map((option, i) => (
          <StDropDownOption key={i} value={option}>
            {option}
          </StDropDownOption>
        ))}
      </StDropDownSelect>
      <StDropDownIconWrapper>
        <MdKeyboardArrowDown></MdKeyboardArrowDown>
      </StDropDownIconWrapper>
    </StDropDownWrapper>
  );
};

export default DropDownWithFocus;
