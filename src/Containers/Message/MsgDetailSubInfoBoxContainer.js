import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailSubInfoBox from '../../Components/Message/MsgDetailSubInfoBox';

const MsgDetailSubInfoBoxContainer = () => {
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

  return (
    <MsgDetailSubInfoBox
      guest={reservation && reservation.guest.length}
      profileImg={profileImg}
      guestProfileImg={
        reservation &&
        reservation.guest.length &&
        reservation.guest[0].profileImg
      }
      reservationId={reservation && reservation.reservationId}
    />
  );
};

export default MsgDetailSubInfoBoxContainer;
