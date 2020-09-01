import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailReservedHomeBox from '../../Components/Message/MsgDetailReservedHomeBox';

const MsgDetailReservedHomeBoxContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const { reservations, profileImg } = useSelector(state => state.trips);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  const reservation = reservations.find(
    reservation =>
      reservation.reservationId === (activeMsg && activeMsg.reservationId),
  );

  const checkIn = reservation && reservation.checkin;
  const ciDate = new Date(checkIn);
  const ciDateString = ciDate.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
  const ciDayName = ciDate.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });
  const ciHour = ciDate.getHours();
  const ciMin = ciDate.getMinutes();
  const ciH = ciHour >= 12 ? `오후 ${ciHour - 12}` : `오전 ${ciHour}`;
  const ciM = ciMin < 10 && `0${ciMin}`;

  const checkOut = reservation && reservation.checkout;
  const coDate = new Date(checkOut);
  const coDateString = coDate.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
  const coDayName = coDate.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });
  const coHour = coDate.getHours();
  const coMin = coDate.getMinutes();
  const coH = coHour >= 12 ? `오후 ${coHour - 12}` : `오전 ${coHour}`;
  const coM = coMin < 10 && `0${coMin}`;

  return (
    <MsgDetailReservedHomeBox
      title={reservation && reservation.title}
      ciDateString={ciDateString}
      ciDayName={ciDayName}
      ciH={ciH}
      ciM={ciM}
      coDateString={coDateString}
      coDayName={coDayName}
      coH={coH}
      coM={coM}
      profileImg={profileImg}
      hostname={reservation && reservation.hostname}
      guest={reservation && reservation.guest.length}
      price={reservation && reservation.price}
      isCanceled={reservation && reservation.isCanceled}
    />
  );
};

export default MsgDetailReservedHomeBoxContainer;
