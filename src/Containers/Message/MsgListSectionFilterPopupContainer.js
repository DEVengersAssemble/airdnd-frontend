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
  const { messages, activeIndex } = useSelector(state => state.message);
  const dispatch = useDispatch();
  // variable
  // const totalMsg = messages.length;
  const allMsg = messages.filter(msg => msg.state === 'all').length;
  const hideMsg = messages.filter(msg => msg.state === 'hide').length;
  const unreadMsg = messages.filter(msg => msg.state === 'unread').length;

  // event
  // !Error: dispatch가 안됨............ㅅㅂ
  // !개잘됌^^
  const onClickAll = useCallback(() => {
    dispatch(allMsgList(activeIndex));
    setOpenPopup(false);
  }, [dispatch, setOpenPopup]);
  const onClickHide = useCallback(() => {
    dispatch(hideMsgList(activeIndex));
    setOpenPopup(false);
  }, [dispatch, setOpenPopup]);
  const onClickUnread = useCallback(() => {
    // ! 읽지않은 메시지는 activeIndex값을 빼서 포커스가 안잡히도록 설정
    dispatch(unreadMsgList());
    setOpenPopup(false);
  }, [dispatch, setOpenPopup]);

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
