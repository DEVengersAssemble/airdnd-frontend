import React, { useRef } from 'react';
import MessageListSection from '../../Components/Message/MessageListSection';
import { useSelector, useDispatch } from 'react-redux';
import { hideMsgListSection } from '../../Modules/message';

const MessageListSectionContainer = () => {
  const dispatch = useDispatch();

  const msgSectionStates = useSelector(state => state.message);

  return <MessageListSection msgSectionStates={msgSectionStates} />;
};

export default MessageListSectionContainer;
