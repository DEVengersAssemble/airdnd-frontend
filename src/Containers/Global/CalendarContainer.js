import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from '../../Components/Global/Calendar';

const CalendarContainer = ({
  responsiveScreen,
  setCheckinData,
  setCheckoutData,
  checkin,
  checkout,
}) => {
  const { checkIn, checkOut } = useSelector(state => state.searchForm);
  const [count, setCount] = useState(0);
  const [isChangeDate, setIsChangeDate] = useState(false);

  // console.log('test', checkin, checkout);

  const confirmCheckin = isChangeDate ? checkin : checkIn;
  const confirmCheckout = isChangeDate ? checkout : checkOut;

  const today = new Date();

  const thisDate = new Date(today.getFullYear(), today.getMonth() + count, 1);
  const nextDate = new Date(thisDate.getFullYear(), thisDate.getMonth() + 1, 1);

  const thisMonth = {
    firstDay: new Date(thisDate.getFullYear(), thisDate.getMonth(), 1).getDay(),
    lastDate: new Date(
      thisDate.getFullYear(),
      thisDate.getMonth() + 1,
      0,
    ).getDate(),
    month: thisDate.getMonth() + 1,
    year: thisDate.getFullYear(),
  };

  const nextMonth = {
    firstDay: new Date(nextDate.getFullYear(), nextDate.getMonth(), 1).getDay(),
    lastDate: new Date(
      nextDate.getFullYear(),
      nextDate.getMonth() + 1,
      0,
    ).getDate(),
    month: nextDate.getMonth() + 1,
    year: nextDate.getFullYear(),
  };

  const thisMonthDates = Array.from(
    { length: thisMonth.lastDate },
    (v, i) => i + 1,
  );
  const nextMonthDates = Array.from(
    { length: nextMonth.lastDate },
    (v, i) => i + 1,
  );

  const onClickBeforeMonth = () => setCount(count - 1);
  const onClickNextMonth = () => setCount(count + 1);

  const onClickCheckDate = e => {
    if (!isChangeDate) setIsChangeDate(true);

    const date = e.target.id.slice(7);
    if (!checkin) {
      console.log('checkin', date);
      setCheckinData(date);
    }
    if (checkin) {
      console.log('checkout', date);
      setCheckoutData(date);
    }
    if (checkout) {
      console.log('checkin', date);
      setCheckinData(date);
      setCheckoutData('');
    }
  };

  return (
    <Calendar
      responsiveScreen={responsiveScreen}
      setCheckinData={setCheckinData}
      setCheckoutData={setCheckoutData}
      thisMonth={thisMonth}
      nextMonth={nextMonth}
      thisMonthDates={thisMonthDates}
      nextMonthDates={nextMonthDates}
      onClickBeforeMonth={onClickBeforeMonth}
      onClickNextMonth={onClickNextMonth}
      checkin={confirmCheckin}
      checkout={confirmCheckout}
      onClickCheckDate={onClickCheckDate}
      isChangeDate={isChangeDate}
    />
  );
};

export default CalendarContainer;
