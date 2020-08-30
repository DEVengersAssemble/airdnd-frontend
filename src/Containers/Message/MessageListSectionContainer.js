import React, { useState, useRef, useEffect } from 'react';
import MessageListSection from '../../Components/Message/MessageListSection';
import { useSelector, useDispatch } from 'react-redux';
import { hideMsgListSection, showMsgListSection } from '../../Modules/message';

const MessageListSectionContainer = () => {
  const msgSectionStates = useSelector(state => state.message);
  const dispatch = useDispatch();
  const myRef = useRef();

  const [hide, setHide] = useState(false); // 디스패치를 보낼지 말지 결정하는 상태
  const [show, setShow] = useState(false);

  const onHide = () => {
    return myRef.current.offsetWidth === 0 && setHide(true);
  };

  const onShow = () => {
    myRef.current.offsetWidth === 375 && setShow(false);
  };

  window.addEventListener('resize', onShow);
  window.addEventListener('resize', onHide);

  useEffect(() => {
    hide && dispatch(hideMsgListSection());
  }, [hide]);

  useEffect(() => {
    show && dispatch(showMsgListSection());
  }, [show]);

  // return show && dispatch(showMsgListSection());
  return (
    <MessageListSection msgSectionStates={msgSectionStates} myRef={myRef} />
  );
};

export default MessageListSectionContainer;
