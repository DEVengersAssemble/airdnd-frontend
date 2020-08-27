import React from 'react';
import MessageListSection from '../../Components/Message/MessageListSection';
import { useSelector } from 'react-redux';

const MessageListSectionContainer = () => {
  const msgListSectionState = useSelector(
    state => state.message.msgListSectionState,
  );

  return <MessageListSection msgListSectionState={msgListSectionState} />;
};

export default MessageListSectionContainer;
