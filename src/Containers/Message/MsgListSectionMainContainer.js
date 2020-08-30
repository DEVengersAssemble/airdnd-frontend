import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';

const MsgListSectionMainContainer = () => {
  // redux
  const { messages, filteredMsgs } = useSelector(state => state.message);
  console.log(messages);
  console.log(filteredMsgs);

  // variable
  const hasMsgs = filteredMsgs.length;

  // !useEffect로 처음 화면이 뜨면 filterdMsgs로 필터된 메시지가 아닌 messages에서 filter된 모든 메시지가 보여진다
  return <MsgListSectionMain hasMsgs={hasMsgs} />;
};

export default MsgListSectionMainContainer;
