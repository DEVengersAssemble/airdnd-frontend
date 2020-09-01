import React from 'react';
import { useSelector } from 'react-redux';
import MsgSectionMain from '../../Components/Message/MsgSectionMain';

const MsgSectionMainContainer = () => {
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);

  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  return (
    <MsgSectionMain
      activeMsg={activeMsg}
      chatHistory={activeMsg && activeMsg.chatHistory}
    />
  );
};

export default MsgSectionMainContainer;
