import React from 'react';
import { useSelector } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { useLocation } from 'react-router';
import qs from 'qs';

const MsgListSectionMainContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.message.messages);

  const query = useLocation();
  const filter = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // ! variable
  const hasMsgs = data && data.all.length;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러...</div>;
  if (!data) return null;

  return <MsgListSectionMain hasMsgs={hasMsgs} messages={data && data.all} />;
};

export default MsgListSectionMainContainer;
