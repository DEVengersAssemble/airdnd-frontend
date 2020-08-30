import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { allMsgList } from '../../Modules/message';

const MsgListSectionMainContainer = () => {
  // redux
  const { messages, filteredMsgs } = useSelector(state => state.message);
  const dispatch = useDispatch();
  console.log(messages);
  console.log(filteredMsgs);

  // variable
  const hasMsgs = filteredMsgs.length;

  useEffect(() => {
    dispatch(allMsgList());
  }, [dispatch]);

  return <MsgListSectionMain hasMsgs={hasMsgs} filteredMsgs={filteredMsgs} />;
};

export default MsgListSectionMainContainer;
