import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { allMsgList } from '../../Modules/message';

const MsgListSectionMainContainer = () => {
  // ! 작업중
  // redux
  const filteredMsgs = useSelector(state => state.message.filteredMsgs);
  const { id, isActive } = filteredMsgs;
  const dispatch = useDispatch();
  console.log(filteredMsgs);
  console.log(id, isActive);

  // variable
  const hasMsgs = filteredMsgs.length;
  useEffect(() => {
    dispatch(allMsgList(id, isActive));
  }, [dispatch]);

  return <MsgListSectionMain hasMsgs={hasMsgs} filteredMsgs={filteredMsgs} />;
};

export default MsgListSectionMainContainer;
