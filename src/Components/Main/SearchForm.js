import React from 'react';
import styled, { css } from 'styled-components';
import SearchButton from './SearchButton';
import SearchPlacePopup from './SearchPlacePopup';
import Button from '../Global/Button';
import { MdClose } from 'react-icons/md';

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
  position: relative;
  width: ${({ width }) => width};
  height: 68px;
  margin-top: -2px;
  outline: none;

  &:not(:first-child) ${StTextWrapper}::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
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
    height: 66px;
    margin-top: -1px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);
    ${StTextWrapper}::before {
      display: none;
    }
    button {
      display: inline-flex;
    }
  }

  &:focus-within + & {
    ${StTextWrapper}::before {
      display: none;
    }
  }
  ${({ name }) =>
    name === 'location' ||
    css`
      display: flex;
      align-items: center;
      padding-left: 20px;
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
  position: relative;
  top: -2px;
  background: transparent;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 18px;
  margin-top: -10px;
  padding: 0;
  outline: none;
  border: none;
  font-weight: ${({ value }) => value && 500};
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
  color: ${({ theme, value }) =>
    theme && value
      ? css`
          ${({ theme }) => theme.color.black}
        `
      : css`
          ${({ theme }) => theme.color.darkGray}
        `};
  font-weight: ${({ value }) => value && 500};
  @media ${({ theme }) => theme.size.iPad} {
    ${({ name }) =>
      name === 'guests' &&
      css`
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
  }
`;

const StDeleteBtn = styled(Button)`
  position: absolute;
  display: none;
  width: 26px;
  height: 26px;
  font-size: 16px;
  top: calc(50% - 13px);
  right: ${({ name }) => (name === 'guests' ? '65px' : '15px')};
  border: none;
  background: ${({ theme }) => theme.color.shadow};
  &:hover {
    background: ${({ theme }) => theme.color.line};
  }
  @media ${({ theme }) => theme.size.iPad} {
    right: ${({ name }) => (name === 'guests' ? '60px' : '10px')};
  }
`;

const SearchForm = ({
  isSearchBtnClicked,
  type,
  changeType,
  closePopup,
  searchData,
  changeSearchData,
  locationResult,
}) => {
  const { location, checkIn, checkOut, flexibleDate, guests } = searchData;
  return (
    <StSearchForm isSearchBtnClicked={isSearchBtnClicked}>
      <StFormItemWrapper
        name="location"
        width="30%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StPlaceLabel>
          <StTextWrapper>
            <StTypeText>위치</StTypeText>
            <StPlaceInput
              value={location}
              name="location"
              placeholder="어디로 여행가세요?"
              onChange={e => {
                changeSearchData(e.target.name, e.target.value);
              }}
            ></StPlaceInput>
          </StTextWrapper>
        </StPlaceLabel>
        <SearchPlacePopup
          type={type}
          closePopup={closePopup}
          locationResult={locationResult}
          changeSearchData={changeSearchData}
        ></SearchPlacePopup>
        {location && (
          <StDeleteBtn
            btnType="circle"
            name="location"
            onClick={() => {
              changeSearchData('location', '');
            }}
          >
            <MdClose />
          </StDeleteBtn>
        )}
      </StFormItemWrapper>
      <StFormItemWrapper
        name="checkIn"
        width="20%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StTextWrapper>
          <StTypeText>체크인</StTypeText>
          <StContentText value={checkIn}>
            {checkIn || '날짜 추가'}
          </StContentText>
        </StTextWrapper>
        {checkIn && (
          <StDeleteBtn
            btnType="circle"
            name="checkIn"
            onClick={() => {
              changeSearchData('checkIn', '');
            }}
          >
            <MdClose />
          </StDeleteBtn>
        )}
      </StFormItemWrapper>
      <StFormItemWrapper
        name="checkOut"
        width="20%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StTextWrapper>
          <StTypeText>체크아웃</StTypeText>
          <StContentText value={checkOut}>
            {checkOut || '날짜 추가'}
          </StContentText>
        </StTextWrapper>
        {checkOut && (
          <StDeleteBtn
            btnType="circle"
            name="checkOut"
            onClick={() => {
              changeSearchData('checkOut', '');
            }}
          >
            <MdClose />
          </StDeleteBtn>
        )}
      </StFormItemWrapper>
      <StFormItemWrapper
        name="guests"
        width="30%"
        tabIndex="0"
        onClick={e => changeType(e)}
      >
        <StTextWrapper>
          <StTypeText>인원</StTypeText>
          <StContentText value={guests} name="guests">
            {guests
              ? `게스트 ${guests.adult + guests.child}명, 유아 ${
                  guests.child
                }명`
              : '게스트 추가'}
          </StContentText>
        </StTextWrapper>
        {guests && (
          <StDeleteBtn
            btnType="circle"
            name="guests"
            onClick={() => {
              changeSearchData('guests', '');
            }}
          >
            <MdClose />
          </StDeleteBtn>
        )}
      </StFormItemWrapper>
      <SearchButton></SearchButton>
    </StSearchForm>
  );
};

export default SearchForm;
