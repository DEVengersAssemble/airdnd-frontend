import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInbox } from '../../Modules/message';
import MessageListSection from '../../Components/Message/MessageListSection';

const MessageListSectionContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.message.data);
  const msgSectionStates = useSelector(state => state.message);
  const dispatch = useDispatch();

  // ! variable
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;

  // ! effect
  useEffect(() => {
    dispatch(fetchInbox('all'));
  }, [dispatch]);

  if (loading) return <div>로딩중....</div>;
  if (error) return <div>에러...</div>;
  if (!data) return null;

  return (
    <MessageListSection
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    />
  );
};

export default MessageListSectionContainer;
