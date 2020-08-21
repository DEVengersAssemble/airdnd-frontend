import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import SearchButton from './SearchButton';
import SearchLocationPopup from './SearchLocationPopup';
import SearchGuestsPopup from './SearchGuestsPopup';
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

const StResetBtn = styled(Button)`
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
  handleSubmit,
  increaseGuestCount,
}) => {
  const { location, checkIn, checkOut, flexibleDate, guests } = searchData;
  const locationRef = useRef();
  const locationPopupRef = useRef();
  const checkInRef = useRef();
  const checkInPopupRef = useRef();
  const checkOutRef = useRef();
  const checkOutPopupRef = useRef();
  const guestsRef = useRef();
  const guestsPopupRef = useRef();
  const handlePopup = ({ target }) => {
    if (!locationRef.current) {
      closePopup();
    } else if (
      (type === 'location' &&
        !locationResult &&
        !locationPopupRef.current.contains(target) &&
        !locationRef.current.contains(target)) ||
      (type === 'checkIn' &&
        !checkInPopupRef.current.contains(target) &&
        !checkInRef.current.contains(target)) ||
      (type === 'checkOut' &&
        !checkOutPopupRef.current.contains(target) &&
        !checkOutRef.current.contains(target)) ||
      (type === 'guests' &&
        !guestsPopupRef.current.contains(target) &&
        !guestsRef.current.contains(target))
    ) {
      console.log('+++++++++');
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [handlePopup, type, searchData, locationResult]);
  return (
    <StSearchForm
      onSubmit={handleSubmit}
      isSearchBtnClicked={isSearchBtnClicked}
    >
      <StFormItemWrapper
        name="location"
        width="30%"
        tabIndex="0"
        onClick={() => changeType('location')}
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
              autoComplete="off"
              required
            ></StPlaceInput>
          </StTextWrapper>
        </StPlaceLabel>
        <SearchLocationPopup
          type={type}
          closePopup={closePopup}
          locationResult={locationResult}
          changeSearchData={changeSearchData}
          ref={locationPopupRef}
        ></SearchLocationPopup>
        {location && (
          <StResetBtn
            btnType="circle"
            name="location"
            ref={locationRef}
            onClick={() => {
              changeSearchData('location', '');
            }}
          >
            <MdClose />
          </StResetBtn>
        )}
      </StFormItemWrapper>
      <StFormItemWrapper
        name="checkIn"
        width="20%"
        tabIndex="0"
        onClick={() => changeType('checkIn')}
      >
        <StTextWrapper>
          <StTypeText>체크인</StTypeText>
          <StContentText value={checkIn}>
            {checkIn || '날짜 추가'}
          </StContentText>
        </StTextWrapper>
        {checkIn && (
          <StResetBtn
            btnType="circle"
            name="checkIn"
            ref={checkInRef}
            onClick={() => {
              changeSearchData('checkIn', '');
            }}
          >
            <MdClose />
          </StResetBtn>
        )}
      </StFormItemWrapper>
      <StFormItemWrapper
        name="checkOut"
        width="20%"
        tabIndex="0"
        onClick={() => changeType('checkOut')}
      >
        <StTextWrapper>
          <StTypeText>체크아웃</StTypeText>
          <StContentText value={checkOut}>
            {checkOut || '날짜 추가'}
          </StContentText>
        </StTextWrapper>
        {checkOut && (
          <StResetBtn
            btnType="circle"
            name="checkOut"
            ref={checkOutRef}
            onClick={() => {
              changeSearchData('checkOut', '');
            }}
          >
            <MdClose />
          </StResetBtn>
        )}
      </StFormItemWrapper>
      <StFormItemWrapper
        name="guests"
        width="30%"
        tabIndex="0"
        onClick={() => changeType('guests')}
      >
        <StTextWrapper>
          <StTypeText>인원</StTypeText>
          <StContentText value={guests} name="guests">
            {guests
              ? `게스트 ${guests.adult + guests.child}명, 유아 ${
                  guests.infant
                }명`
              : '게스트 추가'}
          </StContentText>
        </StTextWrapper>
        {guests && (
          <StResetBtn
            btnType="circle"
            name="guests"
            ref={guestsRef}
            onClick={() => {
              changeSearchData('guests', { adult: 0, child: 0, infant: 0 });
            }}
          >
            <MdClose />
          </StResetBtn>
        )}
        <SearchGuestsPopup
          type={type}
          closePopup={closePopup}
          searchData={searchData}
          increaseGuestCount={increaseGuestCount}
          ref={guestsPopupRef}
        ></SearchGuestsPopup>
      </StFormItemWrapper>
      <SearchButton></SearchButton>
    </StSearchForm>
  );
};

export default SearchForm;
