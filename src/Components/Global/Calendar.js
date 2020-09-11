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
  onMouseLeave,
  getDiff,
  hoverDate,
  reservedDates,
  isDetailPage,
  onClickWrapper,
  checkAfterReserved,
  checkBeforeCheckin,
  beforeToday,
  ...rest
}) => {
  const addZero = num => ((num + '').length === 1 ? '0' + num : num);

  const renderCalendar = (nowMonthDates, nowMonth) => {
    const _nowMonth = addZero(nowMonth.month);
    return (
      <StCalendarWrapper>
        <StMonth>
          {nowMonth.month}월 {nowMonth.year}
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
        <StDates onMouseLeave={onMouseLeave}>
          {nowMonthDates.map((date, i) => {
            const nowDate = `${nowMonth.year}.${_nowMonth}.${addZero(date)}`;
            const dateTime = new Date(nowDate).getTime();
            const reserved = reservedDates.find(v => v === nowDate);
            const isAfterReserved = reserved || checkAfterReserved(dateTime);
            return (
              <StDateWrapper
                key={i}
                onClick={onClickWrapper}
                margin={nowMonth.firstDay}
                darken={checkin && !isAfterReserved && getDiff(dateTime)}
                checkin={checkin === nowDate}
                checkout={checkout === nowDate}
                hoverDate={hoverDate === nowDate}
              >
                <StDateBtn
                  id={`dateId-${nowMonth.year}.${_nowMonth}.${addZero(date)}`}
                  onClick={e => onClickCheckDate(e, dateTime, reserved)}
                  onMouseEnter={onMouseenter}
                  checkin={checkin === nowDate}
                  checkout={checkout === nowDate}
                  hoverDate={hoverDate === nowDate && !isAfterReserved}
                  reserved={reserved}
                  beforeToday={beforeToday(dateTime)}
                  afterReserved={isAfterReserved && !checkout}
                  beforeCheckin={
                    isDetailPage && !checkout && checkBeforeCheckin(dateTime)
                  }
                  btnType="circle"
                >
                  {date}
                </StDateBtn>
              </StDateWrapper>
            );
          })}
        </StDates>
      </StCalendarWrapper>
    );
  };

  return (
    <>
      <StWrapper isDetailPage={isDetailPage} {...rest}>
        <StNextMonthBtn btnType="circle" onClick={onClickBeforeMonth}>
          <AiOutlineLeft />
        </StNextMonthBtn>
        <StNextMonthBtn btnType="circle" onClick={onClickNextMonth}>
          <AiOutlineRight />
        </StNextMonthBtn>
        {renderCalendar(thisMonthDates, thisMonth)}
        {!responsiveScreen && renderCalendar(nextMonthDates, nextMonth)}
      </StWrapper>
    </>
  );
};

const StWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 642px;
  min-width: 308px;
  min-height: 300px;
  margin-top: 30px;
  cursor: pointer;

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
  min-width: 308px;
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

  :hover {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  ${({ checkin, checkout }) =>
    (checkin || checkout) &&
    css`
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ reserved, beforeToday, beforeCheckin, afterReserved }) =>
    (reserved || beforeToday || beforeCheckin || afterReserved) &&
    css`
      color: rgba(72, 72, 72, 0.25);
      text-decoration: line-through;
      font-weight: 400;
      cursor: initial;

      :hover {
        border: none;
      }
    `}
`;

export default Calendar;
