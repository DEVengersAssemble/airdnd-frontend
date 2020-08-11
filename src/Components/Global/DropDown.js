/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const StDropDownWrapper = styled.div`
  display: inline-block;
  width: 200px;
  box-sizing: border-box;
`;

const StHeaderWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 2px 5px;
`;

const StHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 30px;
  text-indent: 5px;
  box-sizing: border-box;
`;

const StIconWrapper = styled.span`
  font-size: 30px;
  height: 30px;
`;

const StOptions = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 5px 0 0 0;
  padding: 5px 5px 3px 5px;
  width: 100%;
  height: 150px;
  overflow-y: scroll;
  border: 1px solid lightgray;
  border-radius: 8px;
`;

const StOptionItem = styled.li`
  cursor: pointer;

  width: 100%;
  height: 30px;
  background: lightgray;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-indent: 5px;
  &:hover {
    background: gray;
  }

  margin-bottom: 3px;
`;

const DropDown = ({
  title,
  options,
  isOpen,
  toggleOpen,
  optionSelected,
  clickOption,
}) => {
  return (
    <StDropDownWrapper>
      <StHeaderWrapper onClick={toggleOpen}>
        <StHeader>{optionSelected || title}</StHeader>
        <StIconWrapper>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </StIconWrapper>
      </StHeaderWrapper>
      {isOpen && (
        <StOptions>
          {options.map((option, i) => (
            <StOptionItem
              key={i}
              onClick={() => {
                clickOption(option);
                toggleOpen();
              }}
            >
              {option}
            </StOptionItem>
          ))}
        </StOptions>
      )}
    </StDropDownWrapper>
  );
};

export default DropDown;
