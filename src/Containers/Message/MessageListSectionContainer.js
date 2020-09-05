import React, { useRef } from 'react';
import MessageListSection from '../../Components/Message/MessageListSection';
import { useSelector } from 'react-redux';

const MessageListSectionContainer = () => {
  const msgSectionStates = useSelector(state => state.message);
  const myRef = useRef();

  return (
    <MessageListSection msgSectionStates={msgSectionStates} myRef={myRef} />
  );
};

export default MessageListSectionContainer;
