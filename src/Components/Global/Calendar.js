import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Button from './Button';

const Calendar = ({
  responsiveScreen,
  thisMonth,
  nextMonth,
  thisMonthDates,
  nextMonthDates,
  onClickBeforeMonth,
  onClickNextMonth,
  checkin,
  checkout,
  onClickCheckDate,
  isChangeDate,
}) => {
  const addZero = num => ((num + '').length === 1 ? '0' + num : num);
  const _thisMonth = addZero(thisMonth.month);
  const _nextMonth = addZero(nextMonth.month);

  return (
    <>
      <StWrapper>
        <StNextMonthBtn btnType="circle" onClick={onClickBeforeMonth}>
          <AiOutlineLeft />
        </StNextMonthBtn>
        <StNextMonthBtn btnType="circle" onClick={onClickNextMonth}>
          <AiOutlineRight />
        </StNextMonthBtn>
        <StCalendarWrapper>
          <StMonth>
            {thisMonth.month}월 {thisMonth.year}
          </StMonth>
          <StDays>
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </StDays>
          <StDates>
            {thisMonthDates.map((date, i) => (
              <StDateWrapper key={i} margin={thisMonth.firstDay}>
                <StDateBtn
                  btnType="circle"
                  id={`dateId-${thisMonth.year}.${_thisMonth}.${addZero(date)}`}
                  onClick={onClickCheckDate}
                  checkin={
                    checkin ===
                    `${thisMonth.year}.${_thisMonth}.${addZero(date)}`
                  }
                  checkout={
                    checkout ===
                    `${thisMonth.year}.${_thisMonth}.${addZero(date)}`
                  }
                >
                  {date}
                </StDateBtn>
              </StDateWrapper>
            ))}
          </StDates>
        </StCalendarWrapper>
        {!responsiveScreen && (
          <StCalendarWrapper>
            <StMonth>
              {nextMonth.month}월 {nextMonth.year}
            </StMonth>
            <StDays>
              <li>일</li>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
            </StDays>
            <StDates>
              {nextMonthDates.map((date, i) => (
                <StDateWrapper key={i} margin={nextMonth.firstDay}>
                  <StDateBtn
                    btnType="circle"
                    id={`dateId-${nextMonth.year}.${_nextMonth}.${addZero(
                      date,
                    )}`}
                    onClick={onClickCheckDate}
                    checkin={
                      checkin ===
                      `${nextMonth.year}.${_nextMonth}.${addZero(date)}`
                    }
                    checkout={
                      checkout ===
                      `${nextMonth.year}.${_nextMonth}.${addZero(date)}`
                    }
                  >
                    {date}
                  </StDateBtn>
                </StDateWrapper>
              ))}
            </StDates>
          </StCalendarWrapper>
        )}
      </StWrapper>
    </>
  );
};

const StWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 642px;
  min-height: 300px;
  margin-top: 30px;

  @media screen and (max-width: 1200px) {
    width: 308px;
  }
`;

const StNextMonthBtn = styled(Button)`
  position: absolute;
  right: 5px;
  top: -6px;
  border: none;

  :nth-of-type(1) {
    left: 5px;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

const StCalendarWrapper = styled.div`
  width: 50%;
  width: 308px;
  display: inline-block;
  vertical-align: top;

  :nth-of-type(1) {
    margin-right: 26px;
  }
`;

const StMonth = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  font-weight: 500;
`;

const StDays = styled.ul`
  li {
    display: inline-block;
    width: 44px;
    padding: 5px 0 10px;
    text-align: center;
    font-size: 12px;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StDates = styled.div``;

const StDateWrapper = styled.div`
  display: inline-block;
  width: 42px;
  height: 42px;
  margin: 1px;

  :first-child {
    margin-left: ${({ margin }) => margin * 44}px;
  }
`;

const StDateBtn = styled(Button)`
  border: none;
  width: 42px;
  height: 42px;
  /* margin: 1px; */
  font-size: 14px;
  font-weight: 500;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.black};
  }
  &:focus {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }

  ${({ checkin, checkout }) =>
    (checkin || checkout) &&
    css`
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    `}
`;

export default Calendar;
