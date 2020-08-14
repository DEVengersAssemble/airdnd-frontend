import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import SettingButton from './SettingButton';
import MyPageButton from './MyPageButton';
import SearchForm from './SearchForm';

const StMainHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  height: 80px;
  background: transparent;
  padding: 20px 80px 15px 80px;
  @media ${({ theme }) => theme.iPad} {
    padding: 20px 40px 15px 40px;
  }
`;

const StNavSearchWrapper = styled.div`
  box-sizing: border-box;
  /* background: lightgreen; */
  position: absolute;
  top: 0;
  left: calc(50vw - 425px);
  width: 850px;
  /* width: 80%; */
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    width: 80%;
    top: 70px;
    left: calc(50vw - 40%);
  }

  @media ${({ theme }) => theme.iPad} {
    width: 80%;
    top: 70px;
    left: calc(50vw - 40%);
  }
`;

const StSettingButtonWrapper = styled.div`
  height: 40px;
`;

const MainHeader = () => {
  return (
    <StMainHeader>
      <Logo></Logo>
      <StNavSearchWrapper>
        <Navigation></Navigation>
        <SearchForm></SearchForm>
      </StNavSearchWrapper>
      <StSettingButtonWrapper>
        <SettingButton></SettingButton>
        <MyPageButton></MyPageButton>
      </StSettingButtonWrapper>
    </StMainHeader>
  );
};

export default MainHeader;
