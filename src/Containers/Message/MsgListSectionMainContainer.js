import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { useLocation } from 'react-router';
import qs from 'qs';
import { setActiveId } from '../../Modules/message';

const MsgListSectionMainContainer = () => {
  // ! redux
  const { data } = useSelector(state => state.message.messages);
  const dispatch = useDispatch();
  // ! query
  const query = useLocation();
  const { filter } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // ! variable
  const hasMsgs = data && data[`${filter || 'all'}`].length;
  const messages = (data && data[`${filter}`]) || data.all;
  const { id } = messages[0];

  useEffect(() => {
    dispatch(setActiveId(id));
  }, [dispatch]);

  return <MsgListSectionMain hasMsgs={hasMsgs} messages={messages} />;
};

export default MsgListSectionMainContainer;
