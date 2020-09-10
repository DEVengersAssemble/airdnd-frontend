import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { fetchInbox } from '../../Modules/message';
import { useLocation } from 'react-router';
import qs from 'qs';

const MsgListSectionMainContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.message.message);
  const dispatch = useDispatch();
  const query = useLocation();
  const filter = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // ! variable
  const hasMsgs = data && data.message.all.messages.length;

  // !effect
  // ? filter마다 불러올 수는 없는건가...

  useEffect(() => {
    dispatch(fetchInbox('all'));
    if (filter === 'hidden') dispatch(fetchInbox('hidden'));
    if (filter === 'unread') dispatch(fetchInbox('unread'));
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러...</div>;
  if (!data) return null;

  return (
    <MsgListSectionMain
      hasMsgs={hasMsgs}
      messages={data && data.message.all.messages}
    />
  );
};

export default MsgListSectionMainContainer;
