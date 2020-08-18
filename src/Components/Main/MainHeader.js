import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import SettingButtonContainer from '../../Containers/Main/SettingButtonContainer';
import MyPageButtonContainer from '../../Containers/Main/MyPageButtonContainer';
import SearchForm from './SearchForm';
import Button from '../Global/Button';
import { FiSearch } from 'react-icons/fi';

const StMainHeader = styled.header`
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  height: ${({ isSearchBtnClicked }) =>
    isSearchBtnClicked ? '200px' : '80px'};
  background: ${({ isScrollTop }) =>
    isScrollTop
      ? 'transparent'
      : css`
          ${({ theme }) => theme.color.white}
        `};
  border: ${({ isScrollTop }) =>
    !isScrollTop && css`1px solid ${({ theme }) => theme.color.line}`};
  box-shadow: ${({ isScrollTop }) =>
    !isScrollTop && css`0px 2px 4px rgba(0,0,0,0.3)`};
  padding: 20px 80px 15px 80px;
  @media ${({ theme }) => theme.size.iPad} {
    padding: 20px 40px 15px 40px;
  }
`;

const slideUp = keyframes`
  from {
    transform: scale(0.3, 0.75) translateY(-80px);
  }
  to {
    transform: scale(1, 1) translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: scale(1, 1) translateY(0px);
    opacity: 0.5;
  }
  to {
    transform: scale(0.3, 0.75) translateY(-80px);
    opacity: 0;
    visibility: hidden;
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
  z-index: -100;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${({ isScrollTop, isSearchBtnClicked }) =>
    isScrollTop || isSearchBtnClicked ? slideUp : slideDown};

  @media (max-width: 950px) {
    width: 80%;
    top: 70px;
    left: calc(50vw - 40%);
  }

  @media ${({ theme }) => theme.size.iPad} {
    width: 80%;
    top: 70px;
    left: calc(50vw - 40%);
  }
`;

const StButtonGroupWrapper = styled.div`
  height: 40px;
  display: flex;
`;

const StOnScrollSearchButton = styled(Button)`
  ${({ isScrollTop, isSearchBtnClicked }) =>
    (isScrollTop || isSearchBtnClicked) &&
    css`
      display: none;
    `}
  position: absolute;
  top: 14px;
  left: calc(50% - 150px);
  padding: 10px 10px 10px 20px;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.line};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.line};
    transition: box-shadow 0.2s ease;
    box-shadow: 2px 2px 4px 0px rgba(168, 168, 168, 0.5);
  }
`;

const StOnScrollSearchButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 160px;
`;

const MainHeader = ({
  isScrollTop,
  handleLogoClick,
  isSearchBtnClicked,
  handleSearchBtnClick,
}) => {
  return (
    <StMainHeader
      isScrollTop={isScrollTop}
      isSearchBtnClicked={isSearchBtnClicked}
    >
      <Logo isScrollTop={isScrollTop} handleLogoClick={handleLogoClick}></Logo>
      <StNavSearchWrapper
        isScrollTop={isScrollTop}
        isSearchBtnClicked={isSearchBtnClicked}
      >
        <Navigation
          isScrollTop={isScrollTop}
          isSearchBtnClicked={isSearchBtnClicked}
        ></Navigation>
        <SearchForm></SearchForm>
      </StNavSearchWrapper>

      <StOnScrollSearchButton
        btnType="oval"
        fontSize="14px"
        isScrollTop={isScrollTop}
        isSearchBtnClicked={isSearchBtnClicked}
        onClick={handleSearchBtnClick}
      >
        검색 시작하기
        <StOnScrollSearchButtonIconWrapper>
          <FiSearch />
        </StOnScrollSearchButtonIconWrapper>
      </StOnScrollSearchButton>

      <StButtonGroupWrapper>
        <SettingButtonContainer isScrollTop={isScrollTop} />
        <MyPageButtonContainer isScrollTop={isScrollTop} />
      </StButtonGroupWrapper>
    </StMainHeader>
  );
};

export default MainHeader;
