import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailSectionMain from '../../Components/Message/MsgDetailSectionMain';

const MsgDetailSectionMainContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  return (
    <MsgDetailSectionMain
      activeMsg={activeMsg && activeMsg}
      isCanceled={activeMsg && activeMsg.contents.isCanceled}
    />
  );
};

export default MsgDetailSectionMainContainer;
