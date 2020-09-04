import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailSubInfoBox from '../../Components/Message/MsgDetailSubInfoBox';
import { openModal } from '../../Modules/message';

const MsgDetailSubInfoBoxContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const { reservations, profileImg } = useSelector(state => state.trips);
  const dispatch = useDispatch();

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  const reservation = reservations.find(
    reservation =>
      reservation.reservationId === (activeMsg && activeMsg.reservationId),
  );

  // ! modal event
  const onClickOpenModal = () => {
    dispatch(openModal('pdf'));
  };

  // ! print evnet
  const onClickOpenPrint = () => {
    window.print();
  };

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
      isCanceled={reservation && reservation.isCanceled}
      onClickOpenModal={onClickOpenModal}
      onClickOpenPrint={onClickOpenPrint}
      homeId={reservation && reservation.homeId}
    />
  );
};

export default MsgDetailSubInfoBoxContainer;
