import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailSubInfoBox from '../../Components/Message/MsgDetailSubInfoBox';
import { openModal } from '../../Modules/message';
import RECEIPT from '../../Assets/docs/receipt.pdf';

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

  // ! print event
  const onClickOpenPrint = () => {
    window.print();
  };

  // ! pdf open event
  const onClickOpenReceiptPDF = () => {
    window.open(RECEIPT, '_blank');
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
      onClickOpenReceiptPDF={onClickOpenReceiptPDF}
      homeId={reservation && reservation.homeId}
    />
  );
};

export default MsgDetailSubInfoBoxContainer;
