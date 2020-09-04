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
  isDetailPage,
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

  // events

  const checkBeforeCheckin = date => {
    const targetTime = new Date(date).getTime();
    const checkinTime = new Date(checkin).getTime();
    return checkinTime > targetTime;
  };

  const checkAfterReserved = date => {
    const checkinTime = new Date(checkin).getTime();
    const dateTime = new Date(date).getTime();
    const firstReserved = reservedDates.find(reservedDate => {
      const reservedTime = new Date(reservedDate).getTime();
      return reservedTime > checkinTime;
    });
    const firstReservedTime = new Date(firstReserved).getTime();
    return firstReservedTime < dateTime;
  };

  const [hoverDate, setHoverDate] = useState('');

  const getDiff = (date, getReserved) => {
    if (!checkin) return;
    const dateTime = new Date(date).getTime();
    const checkinTime = new Date(checkin).getTime();
    const checkoutTime = new Date(checkout).getTime();
    const hoverDateTime = new Date(hoverDate).getTime();
    // switch case
    if (getReserved) {
      return reservedDates.find(v => {
        const vTime = new Date(v).getTime();
        return vTime >= checkinTime && vTime <= dateTime;
      });
    }
    if (!checkout) {
      return dateTime >= checkinTime && dateTime <= hoverDateTime;
    }
    return dateTime >= checkinTime && dateTime <= checkoutTime;
  };

  const onClickCheckDate = (e, reserved) => {
    if (changeInitialDate === false) setChangeDataTrue(true);
    const date = e.target.id.slice(7);

    if (date === reserved) return;
    if (!checkin) {
      console.log('■■■ checkin', date);
      setCheckinData(date);
      return;
    }
    if (checkBeforeCheckin(date) && !isDetailPage) {
      console.log('■■■ beforecheckin - mainPage', date);
      setCheckinData(date);
      setCheckoutData('');
      return;
    }
    if (!checkout && getDiff(date, true)) {
      console.log('■■■ reject reserved', date);
      return;
    }
    if (checkin === date) {
      console.log('■■■ reject sameDate checkin checkout');
      return;
    }
    if (checkout) {
      console.log('■■■ recheckin', date, checkout);
      setCheckinData(date);
      setCheckoutData('');
      return;
    }
    if (checkin && !checkBeforeCheckin(date)) {
      console.log('■■■ checkout', date);
      setCheckoutData(date);
      return;
    }
    if (checkBeforeCheckin(date) && isDetailPage) {
      console.log('■■■ reject beforecheckin - datailPage');
      return;
    }
  };

  console.log('now rendering..');

  const onMouseenter = e => {
    if (!checkin || checkout) return;
    const date = e.target.id.slice(7);
    if (checkAfterReserved(date)) {
      setHoverDate('');
      return;
    }
    if (checkBeforeCheckin(date)) {
      setHoverDate('');
      return;
    }
    setHoverDate(date);
  };

  const onMouseLeave = () => {
    if (!checkin || checkout) return;
    console.log('leave');
    if (!hoverDate) return;
    setHoverDate('');
  };

  const onClickWrapper = e => {
    if (e.target.nodeName !== 'DIV') return;
    e.target.firstElementChild.click();
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
      onMouseLeave={onMouseLeave}
      getDiff={getDiff}
      hoverDate={hoverDate}
      reservedDates={reservedDates}
      isDetailPage={isDetailPage}
      onClickWrapper={onClickWrapper}
      checkAfterReserved={checkAfterReserved}
      checkBeforeCheckin={checkBeforeCheckin}
    />
  );
};

export default CalendarContainer;
