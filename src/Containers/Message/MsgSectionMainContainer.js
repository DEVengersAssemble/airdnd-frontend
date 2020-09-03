import React from 'react';
import { useSelector } from 'react-redux';
import MsgSectionMain from '../../Components/Message/MsgSectionMain';

const MsgSectionMainContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);

  // ! socket으로 저장된 chatHistory
  const chat = useSelector(state => state.socket.chat);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  return (
    <MsgSectionMain
      activeMsg={activeMsg}
      chatHistory={activeMsg && activeMsg.chatHistory}
      chat={chat}
    />
  );
};

export default MsgSectionMainContainer;
