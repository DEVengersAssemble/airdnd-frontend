import React, { useRef } from 'react';
import MessageListSection from '../../Components/Message/MessageListSection';
import { useSelector, useDispatch } from 'react-redux';
import { hideMsgListSection } from '../../Modules/message';

const MessageListSectionContainer = () => {
  const msgSectionStates = useSelector(state => state.message);
  const dispatch = useDispatch();
  const myRef = useRef();

  window.addEventListener('resize', () => {
    console.log(myRef.current.style);
    myRef.current.style.display === '' && dispatch(hideMsgListSection());
  });

  window.addEventListener('resize', () => {
    console.log(myRef.current && myRef);
  });

  return (
    <MessageListSection msgSectionStates={msgSectionStates} myRef={myRef} />
  );
};

export default MessageListSectionContainer;
