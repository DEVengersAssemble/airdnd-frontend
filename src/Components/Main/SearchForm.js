import React from 'react';
import styled, { css } from 'styled-components';
import SearchButton from './SearchButton';
import SearchPlacePopup from './SearchPlacePopup';

const StSearchForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 66px;
  border-radius: 34px;
  display: flex;
  color: ${({ theme }) => theme.color.black};

  ${({ isSearchBtnClicked }) =>
    isSearchBtnClicked
      ? css`
          border: 1px solid ${({ theme }) => theme.color.line};
        `
      : css`
          border: 1px solid transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
            rgba(0, 0, 0, 0.1) 0px 3px 8px;
        `};
`;

const StTextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
`;

const StFormItemWrapper = styled.div`
  width: ${({ width }) => width};
  height: 68px;
  margin-top: -2px;
  outline: none;
  &:not(:first-child) ${StTextWrapper}::before {
    content: '';
    position: absolute;
    top: 0;
    left: -14px;
    display: block;
    height: 100%;
    width: 1px;
    background: ${({ theme }) => theme.color.gray};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.07);
    border-radius: 34px;
    margin-top: -1px;
    height: 66px;
    ${StTextWrapper}::before {
      display: none;
    }
  }

  &:hover + & {
    ${StTextWrapper}::before {
      display: none;
    }
  }

  &:focus-within {
    background: white;
    border-radius: 34px;
    height: 68px;
    margin-top: -2px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);
    ${StTextWrapper}::before {
      display: none;
    }
  }

  &:focus-within + & {
    ${StTextWrapper}::before {
      display: none;
    }
  }
  ${({ name }) =>
    name === 'place' ||
    css`
      display: flex;
      align-items: center;
      padding-left: 14px;
      cursor: pointer;
    `}
`;

const StPlaceLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 28px;
  cursor: pointer;
  &:hover {
    border-radius: 34px;
    & ${StTextWrapper}::before {
      display: none;
    }
  }
  &:focus-within {
    background: white;
    border-radius: 34px;
    & ${StTextWrapper}::before {
      display: none;
    }
  }
`;

const StPlaceInput = styled.input`
  background: transparent;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  outline: none;
  border: none;
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  &::-ms-placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StTypeText = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
`;

const StContentText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const SearchForm = ({ isSearchBtnClicked, type, changeType, closePopup }) => {
  return (
    <StSearchForm isSearchBtnClicked={isSearchBtnClicked}>
      <StFormItemWrapper
        name="place"
        width="30%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StPlaceLabel>
          <StTextWrapper>
            <StTypeText>위치</StTypeText>
            <StPlaceInput
              name="place"
              placeholder="어디로 여행가세요?"
            ></StPlaceInput>
          </StTextWrapper>
        </StPlaceLabel>
        <SearchPlacePopup
          type={type}
          closePopup={closePopup}
        ></SearchPlacePopup>
      </StFormItemWrapper>
      <StFormItemWrapper
        name="checkin"
        width="20%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StTextWrapper>
          <StTypeText>체크인</StTypeText>
          <StContentText>날짜 추가</StContentText>
        </StTextWrapper>
      </StFormItemWrapper>
      <StFormItemWrapper
        name="checkout"
        width="20%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <SearchPlacePopup></SearchPlacePopup>
        <StTextWrapper>
          <StTypeText>체크아웃</StTypeText>
          <StContentText>날짜 추가</StContentText>
        </StTextWrapper>
      </StFormItemWrapper>
      <StFormItemWrapper
        name="guest"
        width="30%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StTextWrapper>
          <StTypeText>인원</StTypeText>
          <StContentText>게스트 추가</StContentText>
        </StTextWrapper>
      </StFormItemWrapper>
      <SearchButton></SearchButton>
    </StSearchForm>
  );
};

export default SearchForm;
