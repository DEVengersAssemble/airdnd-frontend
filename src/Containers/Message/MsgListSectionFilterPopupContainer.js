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
  const { messages } = useSelector(state => state.message);
  const dispatch = useDispatch();
  // variable
  // const totalMsg = messages.length;
  const allMsg = messages.filter(msg => msg.state === 'all').length;
  const hideMsg = messages.filter(msg => msg.state === 'hide').length;
  const unreadMsg = messages.filter(msg => !msg.isRead).length;

  // event
  // !Error: dispatch가 안됨............ㅅㅂ
  // !개잘됌^^
  const onClickAll = useCallback(() => {
    dispatch(allMsgList(0));
    setOpenPopup(false);
  }, [dispatch, setOpenPopup]);
  const onClickHide = useCallback(() => {
    dispatch(hideMsgList(0));
    setOpenPopup(false);
  }, [dispatch, setOpenPopup]);
  const onClickUnread = useCallback(() => {
    dispatch(unreadMsgList(0));
    setOpenPopup(false);
  }, [dispatch, setOpenPopup]);
  // // ! onClick 이벤트가 발생하면 filter해서 메시지 리스트를 보여준다
  // // ! popup을 끈다
  // const onClickFilterList = ({ target }) => {
  //   console.dir(target.childNodes[0]);
  //   console.dir(target);
  //   console.dir(popupRef.current.children[0].children[0]);
  //   if (target === popupRef.current.children[0].children[0].children[0]) {
  //     console.log('true');
  //     dispatch(allMsgList());
  //     setOpenPopup(false);
  //   }
  //   if (target === popupRef.current.children[0].children[1]) {
  //     dispatch(hideMsgList());
  //     setOpenPopup(false);
  //   }
  //   if (target === popupRef.current.children[0].children[3]) {
  //     dispatch(unreadMsgList());
  //     setOpenPopup(false);
  //   }
  // };

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
