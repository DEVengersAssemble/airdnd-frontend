import React from 'react';
import { useSelector } from 'react-redux';
import MessageListSection from '../../Components/Message/MessageListSection';

const MessageListSectionContainer = () => {
  // ! redux
  const msgSectionStates = useSelector(state => state.message);

  // ! variable
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;

  return (
    <MessageListSection
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    />
  );
};

export default MessageListSectionContainer;
