import React from 'react';
import { useSelector } from 'react-redux';
import MsgSectionMain from '../../Components/Message/MsgSectionMain';

const MsgSectionMainContainer = () => {
  const { activeIndex, filteredMsgs, isHost } = useSelector(
    state => state.message,
  );

  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  return (
    <MsgSectionMain
      chatHistory={activeMsg && activeMsg.chatHistory}
      isHost={isHost}
    />
  );
};

export default MsgSectionMainContainer;
