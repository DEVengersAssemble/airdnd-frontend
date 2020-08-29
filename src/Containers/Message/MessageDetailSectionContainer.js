import React from 'react';
import { useSelector } from 'react-redux';
import MessageDetailSection from '../../Components/Message/MessageDetailSection';

const MessageDetailSectionContainer = () => {
  const msgSectionStates = useSelector(state => state.message);

  return <MessageDetailSection msgSectionStates={msgSectionStates} />;
};

export default MessageDetailSectionContainer;
