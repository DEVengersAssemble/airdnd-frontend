import React from 'react';
import MessageSection from '../../Components/Message/MessageSection';
import { useSelector } from 'react-redux';

const MessageSectionContainer = () => {
  // ! redux
  const msgSectionStates = useSelector(state => state.message);

  // ! variable
  const { msgDetailSectionState, msgListSectionState } = msgSectionStates;

  return (
    <MessageSection
      msgDetailSectionState={msgDetailSectionState}
      msgListSectionState={msgListSectionState}
    />
  );
};

export default MessageSectionContainer;
