import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import SettingButton from './SettingButton';
import MyPageButton from './MyPageButton';
import SearchForm from './SearchForm';

const StMainHeader = styled.header`
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  height: 80px;
  background: ${({ isScrollTop }) => (isScrollTop ? 'transparent' : 'white')};
  padding: 20px 80px 15px 80px;
  @media ${({ theme }) => theme.iPad} {
    padding: 20px 40px 15px 40px;
  }
`;

const fadeIn = keyframes`
  0% {
    display: block;
    top: -100px;
  }
  25% {
    top: 0px;

  }
  50% {
    top: 100px;
  }
  75% {
    top: 200px;
  }
  100% {
    top: 300px;
    display: none;
  }
`;

const fadeOut = keyframes`
  0% {
    display: block;
    top: 300px;
  }
  25% {
    top: 200px;
  }
  50% {
    top: 100px;
  }
  75% {
    top: 0px;
  }
  100% {
    top: -100px;
    display: none;
  }
`;

const StNavSearchWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: calc(50vw - 425px);
  width: 850px;
  display: flex;
  flex-direction: column;
  animation: ${({ isScrollTop }) =>
    isScrollTop
      ? css`
          ${fadeOut} 2s;
        `
      : css`
          ${fadeIn} 2s;
        `};
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

const MainHeader = ({ isScrollTop, handleClick }) => {
  return (
    <StMainHeader isScrollTop={isScrollTop}>
      <Logo handleClick={handleClick}></Logo>

      <StNavSearchWrapper isScrollTop={isScrollTop}>
        <Navigation></Navigation>
        <SearchForm></SearchForm>
      </StNavSearchWrapper>

      <StSettingButtonWrapper>
        <SettingButton isScrollTop={isScrollTop}></SettingButton>
        <MyPageButton isScrollTop={isScrollTop}></MyPageButton>
      </StSettingButtonWrapper>
    </StMainHeader>
  );
};

export default MainHeader;
