import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailAddressBox from '../../Components/Message/MsgDetailAddressBox';

const MsgDetailAddressBoxContainer = () => {
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
    <MsgDetailAddressBox
    // address={reservation && reservation.address}
    // lat={reservation && reservation.location.lat}
    // lng={reservation && reservation.location.lng}
    />
  );
};

export default MsgDetailAddressBoxContainer;
