import React from 'react';
import MessageSection from '../../Components/Message/MessageSection';
import { useSelector, useDispatch } from 'react-redux';

const MessageSectionContainer = () => {
  const msgSectionStates = useSelector(state => state.message);

  return <MessageSection msgSectionStates={msgSectionStates} />;
};

export default MessageSectionContainer;
