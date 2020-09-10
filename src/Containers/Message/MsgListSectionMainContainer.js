import React from 'react';
import { useSelector } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { useLocation } from 'react-router';
import qs from 'qs';

const MsgListSectionMainContainer = () => {
  // ! redux
  const { data } = useSelector(state => state.message.messages);

  // ! query
  const query = useLocation();
  const filter = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });
  console.log(filter);

  // ! variable
  const hasMsgs = data && data.all.length;

  return <MsgListSectionMain hasMsgs={hasMsgs} messages={data && data.all} />;
};

export default MsgListSectionMainContainer;
