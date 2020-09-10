import React, { useEffect } from 'react';
import MessageMain from '../../Components/Message/MessageMain';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchInbox } from '../../Modules/message';
import qs from 'qs';

const MessageMainContainer = () => {
  const dispatch = useDispatch();
  const query = useLocation();
  const filter = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });
  console.log(filter);

  useEffect(() => {
    dispatch(fetchInbox(filter || 'all'));
  }, [dispatch, filter]);

  return <MessageMain />;
};

export default MessageMainContainer;
