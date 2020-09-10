import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailHostInfoPageLinkBox from '../../Components/Message/MsgDetailHostInfoPageLinkBox';

const MsgDetailHostInfoPageLinkBoxContainer = () => {
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
    <MsgDetailHostInfoPageLinkBox
    // hostname={reservation && reservation.hostname}
    // hostProfileImg={activeMsg && activeMsg.contents.hostProfileImg}
    />
  );
};

export default MsgDetailHostInfoPageLinkBoxContainer;
