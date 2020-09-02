import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Button from './Button';

const Calendar = ({ isScreenLarge }) => {
  const today = new Date();
  const initialState = {
    thisMonth: {
      firstDay: new Date(today.getFullYear(), today.getMonth(), 1).getDay(),
      lastDate: new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0,
      ).getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
    },
    nextMonth: {
      firstDay: new Date(today.getFullYear(), today.getMonth() + 1, 1).getDay(),
      lastDate: new Date(
        today.getFullYear(),
        today.getMonth() + 2,
        0,
      ).getDate(),
      month: today.getMonth() + 2,
      year: today.getFullYear(),
    },
  };

  const [dateState, setDateState] = useState(initialState);
  const { thisMonth, nextMonth } = dateState;
  // firstDay.getMonth() //?
  console.log(dateState);

  // const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  // const lastDate = new Date(
  //   today.getFullYear(),
  //   today.getMonth() + 1,
  //   0,
  // ).getDate();

  // console.log(firstDay, lastDate);

  const thisMonthDays = Array.from(
    { length: thisMonth.lastDate },
    (v, i) => i + 1,
  );
  const nextMonthDays = Array.from(
    { length: nextMonth.lastDate },
    (v, i) => i + 1,
  );

  return (
    <>
      <StWrapper>
        <StNextMonthBtn btnType="circle">
          <AiOutlineLeft />
        </StNextMonthBtn>
        <StNextMonthBtn btnType="circle">
          <AiOutlineRight />
        </StNextMonthBtn>
        <StCalendarWrapper>
          <StMonth>9월 2020</StMonth>
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
            {thisMonthDays.map((day, i) => (
              <StDateBtn key={i} btnType="circle" margin={thisMonth.firstDay}>
                {day}
              </StDateBtn>
            ))}
          </StDates>
        </StCalendarWrapper>
        {!isScreenLarge && (
          <StCalendarWrapper>
            <StMonth>10월 2020</StMonth>
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
              {nextMonthDays.map((day, i) => (
                <StDateBtn key={i} btnType="circle" margin={nextMonth.firstDay}>
                  {day}
                </StDateBtn>
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

const StDateBtn = styled(Button)`
  border: none;
  width: 42px;
  height: 42px;
  margin: 1px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.black};
  }
  &:focus {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }

  :first-child {
    margin-left: ${({ margin }) => margin * 44}px;
  }
`;

export default Calendar;
