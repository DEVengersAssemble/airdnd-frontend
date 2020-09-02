import React, { useState } from 'react';
import Calendar from '../../Components/Global/Calendar';

const CalendarContainer = ({
  responsiveScreen,
  setCheckinData,
  setCheckoutData,
  checkin,
  checkout,
  changeInitialDate,
  setChangeDataTrue,
  reservedDates = [],
}) => {
  const [count, setCount] = useState(0);

  const onClickBeforeMonth = () => setCount(count - 1);
  const onClickNextMonth = () => setCount(count + 1);

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

  const checkBeforeDate = date => {
    const targetTime = new Date(date).getTime();
    const checkinTime = new Date(checkin).getTime();
    return checkinTime > targetTime;
  };

  const [hoverDate, setHoverDate] = useState('');

  const getDiff = (date, getReserved) => {
    const hoverDateTime = new Date(hoverDate).getTime();
    const checkinTime = new Date(checkin).getTime();
    const checkoutTime = new Date(checkout).getTime();
    const btnTime = new Date(date).getTime();
    if (changeInitialDate === false) {
      return btnTime >= checkinTime && btnTime <= checkoutTime;
    }
    if (getReserved) {
      return reservedDates.find(v => {
        const vTime = new Date(v).getTime();
        return vTime >= checkinTime && vTime <= hoverDateTime;
      });
    }
    return btnTime >= checkinTime && btnTime <= hoverDateTime;
  };

  const onClickCheckDate = (e, reserved) => {
    if (changeInitialDate === false) setChangeDataTrue(true);

    const date = e.target.id.slice(7);
    if (date === reserved) return;

    if (!checkin) {
      console.log('checkin1', date);
      setCheckinData(date);
    }
    if (checkBeforeDate(date)) {
      console.log('beforecheckin', date);
      setCheckinData(date);
    }
    if (getDiff(reserved, true)) {
      console.log('reject', date);
      return;
    }
    if (checkin && !checkBeforeDate(date)) {
      console.log('checkout', date);
      setCheckoutData(date);
    }
    if (checkout) {
      console.log('recheckin', date);
      setCheckinData(date);
      setCheckoutData('');
    }
  };

  const onMouseenter = e => {
    const date = e.target.id.slice(7);
    if (!checkin || checkout || checkBeforeDate(date)) return;
    setHoverDate(date);
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
      checkin={checkin}
      checkout={checkout}
      onClickCheckDate={onClickCheckDate}
      onMouseenter={onMouseenter}
      getDiff={getDiff}
      hoverDate={hoverDate}
      reservedDates={reservedDates}
    />
  );
};

export default CalendarContainer;
