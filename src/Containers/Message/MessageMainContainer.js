import React, { useEffect } from 'react';
import MessageMain from '../../Components/Message/MessageMain';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchInbox } from '../../Modules/message';
import qs from 'qs';

const MessageMainContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.message.messages);
  const dispatch = useDispatch();

  // ! query
  const query = useLocation();
  const filter = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // ! effect
  useEffect(() => {
    console.log('메시지 페이지 들어오는순간~ 데이터 겟또!');
    dispatch(fetchInbox());
  }, [dispatch, filter]);

  if (loading) return <div>로딩중 .... </div>;
  if (error) return <div>에러....</div>;
  if (!data) return null;

  return <MessageMain />;
};

export default MessageMainContainer;
