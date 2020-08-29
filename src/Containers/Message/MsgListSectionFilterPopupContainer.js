import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionFilterPopup from '../../Components/Message/MsgListSectionFilterPopup';
// ! 이런 바보같은 실수 하지 말자 김태진 멍청이새끼야
// import allMsgList from '../../Modules/message';
// import hideMsgList from '../../Modules/message';
// import unreadMsgList from '../../Modules/message';
import { allMsgList, hideMsgList, unreadMsgList } from '../../Modules/message';

const MsgListSectionFilterPopupContainer = ({
  setOpenPopup,
  openPopup,
  popupRef,
}) => {
  // redux
  const msgs = useSelector(state => state.message.messages);
  const dispatch = useDispatch();
  // variable
  // const totalMsg = messages.length;
  const allMsg = msgs.filter(msg => msg.state === 'all').length;
  const hideMsg = msgs.filter(msg => msg.state === 'hide').length;
  const unreadMsg = msgs.filter(msg => !msg.readMsg).length;

  // event
  // !Error: dispatch가 안됨............ㅅㅂ
  // !개잘됌^^
  const onClickAll = () => {
    dispatch(allMsgList());
    setOpenPopup(false);
  };
  const onClickHide = () => {
    dispatch(hideMsgList());
    setOpenPopup(false);
  };
  const onClickUnread = () => {
    dispatch(unreadMsgList());
    setOpenPopup(false);
  };

  return (
    <MsgListSectionFilterPopup
      openPopup={openPopup}
      popupRef={popupRef}
      onClickAll={onClickAll}
      onClickHide={onClickHide}
      onClickUnread={onClickUnread}
      allMsg={allMsg}
      hideMsg={hideMsg}
      unreadMsg={unreadMsg}
    />
  );
};

export default MsgListSectionFilterPopupContainer;
