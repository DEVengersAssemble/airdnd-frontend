import React from 'react';
import styled from 'styled-components';

const StNav = styled.nav`
  height: 80px;
  /* background: ${props => props.theme.deepGreen}; */
`;

const StList = styled.ul`
  display: flex;
`;

const StItem = styled.li``;

const StItemLabel = styled.label`
  display: block;
`;

const StItemSpan = styled.span`
  /* background: lightgray; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 12px 24px;
  color: white;
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 18px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transform: scaleX(0);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
`;

const StItemInput = styled.input`
  display: none;
  &:hover + ${StItemSpan}::before {
    transform: scaleX(0.5);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
  &:checked + ${StItemSpan}::before {
    transform: scaleX(1.3);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
`;

const Navigation = () => {
  return (
    <StNav>
      <StList>
        <StItem>
          <StItemLabel>
            <StItemInput
              type="radio"
              name="nav"
              value="short-term-stay"
              defaultChecked
            />
            <StItemSpan>숙소</StItemSpan>
          </StItemLabel>
        </StItem>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="long-term-stay" />
            <StItemSpan>월 단위 숙박</StItemSpan>
          </StItemLabel>
        </StItem>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="experience" />

            <StItemSpan>체험</StItemSpan>
          </StItemLabel>
        </StItem>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="online-experience" />
            <StItemSpan>온라인체험</StItemSpan>
          </StItemLabel>
        </StItem>
      </StList>
    </StNav>
  );
};

export default Navigation;
