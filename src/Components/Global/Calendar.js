import React from 'react';
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
  onMouseenter,
  getDiff,
  hoverDate,
  reservedDates,
  isDetailPage,
}) => {
  const addZero = num => ((num + '').length === 1 ? '0' + num : num);
  const _thisMonth = addZero(thisMonth.month);
  const _nextMonth = addZero(nextMonth.month);

  return (
    <>
      <StWrapper isDetailPage={isDetailPage}>
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
            {thisMonthDates.map((date, i) => {
              const thisDate = `${thisMonth.year}.${_thisMonth}.${addZero(
                date,
              )}`;
              const reserved = reservedDates.find(v => v === thisDate);
              return (
                <StDateWrapper
                  key={i}
                  margin={thisMonth.firstDay}
                  darken={getDiff(thisDate)}
                  checkin={checkin === thisDate}
                  checkout={checkout === thisDate}
                  hoverDate={hoverDate === thisDate}
                >
                  <StDateBtn
                    onMouseEnter={onMouseenter}
                    btnType="circle"
                    id={`dateId-${thisMonth.year}.${_thisMonth}.${addZero(
                      date,
                    )}`}
                    onClick={e => onClickCheckDate(e, reserved)}
                    checkin={checkin === thisDate}
                    checkout={checkout === thisDate}
                    reserved={reserved}
                    // reserved={reserved}
                  >
                    {date}
                  </StDateBtn>
                </StDateWrapper>
              );
            })}
          </StDates>
        </StCalendarWrapper>
        {!responsiveScreen && (
          <StCalendarWrapper className="nextMonth">
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
              {nextMonthDates.map((date, i) => {
                const nextDate = `${nextMonth.year}.${_nextMonth}.${addZero(
                  date,
                )}`;
                const reserved = reservedDates.find(v => v === nextDate);
                return (
                  <StDateWrapper
                    key={i}
                    margin={nextMonth.firstDay}
                    darken={getDiff(nextDate)}
                    checkin={checkin === nextDate}
                    checkout={checkout === nextDate}
                    hoverDate={hoverDate === nextDate}
                  >
                    <StDateBtn
                      onMouseEnter={onMouseenter}
                      btnType="circle"
                      id={`dateId-${nextMonth.year}.${_nextMonth}.${addZero(
                        date,
                      )}`}
                      onClick={e => onClickCheckDate(e, reserved)}
                      checkin={checkin === nextDate}
                      checkout={checkout === nextDate}
                      reserved={reserved}
                    >
                      {date}
                    </StDateBtn>
                  </StDateWrapper>
                );
              })}
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

  ${({ isDetailPage }) =>
    isDetailPage &&
    css`
      @media screen and (max-width: 1200px) {
        width: 308px;

        .nextMonth {
          display: none;
        }
      }
    `}
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
  width: 44px;
  height: 44px;

  :first-child {
    margin-left: ${({ margin }) => margin * 44}px;
  }

  ${({ darken }) =>
    darken &&
    css`
      background-color: ${({ theme }) => theme.color.softGray};
    `}

  ${({ checkin }) =>
    checkin &&
    css`
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    `}

  ${({ checkout, hoverDate }) =>
    (checkout || hoverDate) &&
    css`
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    `}
`;

const StDateBtn = styled(Button)`
  border: none;
  width: 42px;
  height: 42px;
  margin: 1px;
  font-size: 14px;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  ${({ checkin, checkout }) =>
    (checkin || checkout) &&
    css`
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ reserved }) =>
    reserved &&
    css`
      color: ${({ theme }) => theme.color.gray};
      text-decoration: line-through;
      font-weight: 400;
    `}
`;

export default Calendar;
