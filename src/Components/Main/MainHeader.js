import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const StMainHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  background: lightgray;
  height: 80px;
  padding: 20px 80px 15px 80px;
  background: transparent;
`;

const StNavSearchWrapper = styled.div`
  box-sizing: border-box;
  /* background: lightgreen; */
  position: absolute;
  top: 0;
  left: calc(50vw - 350px);
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const MainHeader = () => {
  return (
    <StMainHeader>
      <Logo></Logo>
      <StNavSearchWrapper>
        <Navigation></Navigation>
      </StNavSearchWrapper>
    </StMainHeader>
  );
};

export default MainHeader;
