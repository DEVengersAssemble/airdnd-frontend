import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailSectionMain from '../../Components/Message/MsgDetailSectionMain';

const MsgDetailSectionMainContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const { reservations } = useSelector(state => state.trips);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  const reservation = reservations.find(
    reservation =>
      reservation.reservationId === (activeMsg && activeMsg.reservationId),
  );

  console.log('actvieMsg 일때 홈아이디!!!!', reservation && reservation.homeId);
  console.log('actvieMsg일때 reservation', reservation);
  console.log('actvieMsg', activeMsg);

  return (
    <MsgDetailSectionMain
      activeMsg={activeMsg && activeMsg}
      isCanceled={activeMsg && activeMsg.contents.isCanceled}
    />
  );
};

export default MsgDetailSectionMainContainer;
