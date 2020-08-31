import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionHeader from '../../Components/Message/MsgListSectionHeader';

const MsgListSectionHeaderContainer = () => {
  // redux
  // !현재 작업 진행중
  const { messages, filteredMsgs } = useSelector(state => state.message);
  const dispatch = useDispatch();

  // variable
  const allState = filteredMsgs.map(msg => msg.state)[0];
  const hideState = filteredMsgs.map(msg => msg.state)[0];
  const unreadState = filteredMsgs.map(msg => msg.state)[0];

  // hook
  const [openPopup, setOpenPopup] = useState(false);
  const popupBtnRef = useRef();
  const popupRef = useRef();

  // event
  const onClickPopup = useCallback(() => {
    setOpenPopup(!openPopup);
  }, [openPopup, setOpenPopup]);

  // onClickOutside: close popup when outside click
  const onClickOutSide = useCallback(
    ({ target }) => {
      if (!popupBtnRef.current || popupBtnRef.current.contains(target))
        return null;
      if (!popupRef.current || popupRef.current.contains(target)) return null;
      return setOpenPopup(false);
    },
    [setOpenPopup, popupBtnRef, popupRef],
  );

  useEffect(() => {
    document.addEventListener('click', onClickOutSide);
    return () => {
      document.removeEventListener('click', onClickOutSide);
    };
  }, [onClickOutSide]);

  return (
    <MsgListSectionHeader
      allState={allState}
      hideState={hideState}
      unreadState={unreadState}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      onClickPopup={onClickPopup}
      popupBtnRef={popupBtnRef}
      popupRef={popupRef}
    />
  );
};

export default MsgListSectionHeaderContainer;
