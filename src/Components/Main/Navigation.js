import React from 'react';
import styled from 'styled-components';

const StNav = styled.nav`
  height: 80px;
  background: ${props => props.theme.deepGreen};
`;

const StList = styled.ul`
  display: flex;
`;

const StItem = styled.li``;

const StItemLabel = styled.label`
  display: block;
`;

const StItemInput = styled.input``;

const StItemSpan = styled.span``;

const Navigation = () => {
  return (
    <StNav>
      <StList>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="short-term-stay" />
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
