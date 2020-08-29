import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionFilterPopup from '../../Components/Message/MsgListSectionFilterPopup';
import allMsgList from '../../Modules/message';
import hideMsgList from '../../Modules/message';
import unreadMsgList from '../../Modules/message';

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
  // ! onClick 이벤트가 발생하면 filter해서 메시지 리스트를 보여준다
  // ! popup을 끈다
  const onClickFilterList = useCallback(
    ({ target }) => {
      // console.dir(target.childNodes[0]);
      console.dir(target);
      console.dir(popupRef.current.children[0].children);
      if (target === popupRef.current.children[0].children[0]) {
        dispatch(allMsgList());
        setOpenPopup(false);
      }
      if (target === popupRef.current.children[0].children[1]) {
        dispatch(hideMsgList());
        setOpenPopup(false);
      }
      if (target === popupRef.current.children[0].children[3]) {
        dispatch(unreadMsgList());
        setOpenPopup(false);
      }
    },
    [dispatch, setOpenPopup],
  );

  return (
    <MsgListSectionFilterPopup
      openPopup={openPopup}
      popupRef={popupRef}
      onClickFilterList={onClickFilterList}
      allMsg={allMsg}
      hideMsg={hideMsg}
      unreadMsg={unreadMsg}
    />
  );
};

export default MsgListSectionFilterPopupContainer;
