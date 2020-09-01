import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Button from './Button';

const Calendar = ({ isScreenLarge }) => {
  const days = Array.from({ length: 30 }, (v, i) => i + 1);

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
            {days.map((day, i) => (
              <StDateBtn key={i} btnType="circle">
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
              {days.map((day, i) => (
                <StDateBtn key={i} btnType="circle">
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
`;

export default Calendar;
