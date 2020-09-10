import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionFilterPopup from '../../Components/Message/MsgListSectionFilterPopup';
import {
  allMsgList,
  hideMsgList,
  unreadMsgList,
  fetchInbox,
} from '../../Modules/message';
import qs from 'qs';
import { Filter } from 'styled-icons/boxicons-regular';

const MsgListSectionFilterPopupContainer = ({
  setOpenPopup,
  openPopup,
  popupRef,
}) => {
  // // ! redux
  // const { messages, activeIndex } = useSelector(state => state.message);
  // const dispatch = useDispatch();

  // // ! variable
  // const allMsgCount = messages.filter(msg => msg.state === 'all').length;
  // const hiddenMsgCount = messages.filter(msg => msg.state === 'hide').length;
  // const unreadMsgCount = messages.filter(msg => msg.state === 'unread').length;

  // // ! event
  // const onClickAll = () => {
  //   dispatch(allMsgList(activeIndex));
  //   setOpenPopup(false);
  // };

  // const onClickHide = () => {
  //   dispatch(hideMsgList(activeIndex));
  //   setOpenPopup(false);
  // };

  // const onClickUnread = () => {
  //   // ! 읽지않은 메시지는 activeIndex값을 빼서 포커스가 안잡히도록 설정
  //   dispatch(unreadMsgList());
  //   setOpenPopup(false);
  // };

  // // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // // ! redux
  // const { data, loading, error } = useSelector(state => state.message);

  // // ! variable
  // const id = [1, 2, 3, 4][0];

  // // ! query
  // const query = useLocation();
  // const { filter } = qs.parse(query.search, {
  //   ignoreQueryPrefix: true,
  // });

  // // ! event
  // const onClickFilterPopup = () => {
  //   dispatch(fetchInbox(filter));
  //   setOpenPopup(false);
  // };

  // if (loading) return <div>로딩중...</div>;
  // if (error) return <div>Error...</div>;
  // if (!data) return null;

  return (
    <MsgListSectionFilterPopup
      openPopup={openPopup}
      popupRef={popupRef}
      // onClickAll={onClickAll}
      // onClickHide={onClickHide}
      // onClickUnread={onClickUnread}
      // allMsgCount={allMsgCount}
      // hiddenMsgCount={hiddenMsgCount}
      // unreadMsgCount={unreadMsgCount}
      // onClickFilterPopup={onClickFilterPopup}
      // id={id}
    />
  );
};

export default MsgListSectionFilterPopupContainer;
