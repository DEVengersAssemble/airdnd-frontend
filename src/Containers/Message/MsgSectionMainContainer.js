import React from 'react';
import { useSelector } from 'react-redux';
import MsgSectionMain from '../../Components/Message/MsgSectionMain';

const MsgSectionMainContainer = () => {
  // ! redux
  const { activeMsg } = useSelector(state => state.message);

  // // ! socket으로 저장된 chatHistory
  // const msg = useSelector(state => state.socket.chat);

  return (
    <MsgSectionMain
      activeMsg={activeMsg}
      chatHistory={activeMsg.chatHistory}
      // msg={msg} // socket chat
    />
  );
};

export default MsgSectionMainContainer;
