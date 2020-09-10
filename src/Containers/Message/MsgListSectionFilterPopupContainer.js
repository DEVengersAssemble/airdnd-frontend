import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionFilterPopup from '../../Components/Message/MsgListSectionFilterPopup';
import { fetchInbox, closePopup } from '../../Modules/message';
import qs from 'qs';

const MsgListSectionFilterPopupContainer = ({ popupState, popupRef }) => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.message.messages);
  const dispatch = useDispatch();

  // ! variable
  const allMsgCount = data && data.all.length;
  const hiddenMsgCount = data && data.all.length;
  const unreadMsgCount = data && data.all.length;

  // ! event
  const onClickAll = () => {
    dispatch(closePopup('filter'));
  };

  const onClickHidden = () => {
    dispatch(closePopup('filter'));
  };

  const onClickUnread = () => {
    // ! 읽지않은 메시지는 activeIndex값을 빼서 포커스가 안잡히도록 설정
    dispatch(closePopup('filter'));
  };

  // ! query
  const query = useLocation();
  const { filter } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // // ! event
  // const onClickFilterPopup = () => {
  //   dispatch(fetchInbox(filter));
  //   setOpenPopup(false);
  // };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <MsgListSectionFilterPopup
      popupState={popupState}
      popupRef={popupRef}
      onClickAll={onClickAll}
      onClickHidden={onClickHidden}
      onClickUnread={onClickUnread}
      allMsgCount={allMsgCount}
      hiddenMsgCount={hiddenMsgCount}
      unreadMsgCount={unreadMsgCount}
      // onClickFilterPopup={onClickFilterPopup}
      // id={id}
    />
  );
};

export default MsgListSectionFilterPopupContainer;
