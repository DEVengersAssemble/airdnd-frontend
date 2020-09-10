import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailReservedHomeLinkBox from '../../Components/Message/MsgDetailReservedHomeLinkBox';

const MsgDetailReservedHomeLinkBoxContainer = () => {
  // // ! redux
  // const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  // const { reservations } = useSelector(state => state.trips);

  // // ! variable
  // const activeMsg = filteredMsgs.find(
  //   (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  // );

  // const reservation = reservations.find(
  //   reservation =>
  //     reservation.reservationId === (activeMsg && activeMsg.reservationId),
  // );

  return (
    <MsgDetailReservedHomeLinkBox
    // rules={reservation && reservation.rules}
    // homeId={reservation && reservation.homeId}
    />
  );
};

export default MsgDetailReservedHomeLinkBoxContainer;
