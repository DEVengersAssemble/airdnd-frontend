import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailRefundBox from '../../Components/Message/MsgDetailRefundBox';
import { openModal } from '../../Modules/message';
import RECEIPT from '../../Assets/docs/receipt.pdf';

const MsgDetailRefundBoxContainer = () => {
  // // ! redux
  // const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  // const { reservations } = useSelector(state => state.trips);
  // const dispatch = useDispatch();

  // // ! variable
  // const activeMsg = filteredMsgs.find(
  //   (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  // );

  // const reservation = reservations.find(
  //   reservation =>
  //     reservation.reservationId === (activeMsg && activeMsg.reservationId),
  // );

  // // ! modal event
  // const onClickOpenModal = () => {
  //   dispatch(openModal('business'));
  // };

  // // ! pdf open event
  // const onClickOpenReceiptPDF = () => {
  //   window.open(RECEIPT, '_blank');
  // };

  return (
    <MsgDetailRefundBox
    // price={reservation && reservation.price}
    // onClickOpenModal={onClickOpenModal}
    // onClickOpenReceiptPDF={onClickOpenReceiptPDF}
    />
  );
};

export default MsgDetailRefundBoxContainer;
