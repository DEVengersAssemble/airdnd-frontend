import React, { useRef } from 'react';
import MessageListSection from '../../Components/Message/MessageListSection';
import { useSelector, useDispatch } from 'react-redux';
import { hideMsgListSection } from '../../Modules/message';

const MessageListSectionContainer = () => {
  const dispatch = useDispatch();
  const myRef = useRef();

  const msgSectionStates = useSelector(state => state.message);

  window.addEventListener('resize', () => {
    console.log(myRef.current && myRef.current.style.display);
  });

  return (
    <MessageListSection msgSectionStates={msgSectionStates} myRef={myRef} />
  );
};

export default MessageListSectionContainer;
