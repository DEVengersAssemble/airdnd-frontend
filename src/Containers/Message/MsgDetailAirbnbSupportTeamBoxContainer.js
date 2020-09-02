import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailAirbnbSupportTeamBox from '../../Components/Message/MsgDetailAirbnbSupportTeamBox';

const MsgDetailAirbnbSupportTeamBoxContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  return (
    <MsgDetailAirbnbSupportTeamBox
      isCanceled={activeMsg && activeMsg.contents.isCanceled}
    />
  );
};

export default MsgDetailAirbnbSupportTeamBoxContainer;
