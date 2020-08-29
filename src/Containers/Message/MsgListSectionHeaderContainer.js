import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionHeader from '../../Components/Message/MsgListSectionHeader';

const MsgListSectionHeaderContainer = () => {
  // redux
  // !현재 작업 진행중
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();
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
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      onClickPopup={onClickPopup}
      popupBtnRef={popupBtnRef}
      popupRef={popupRef}
    />
  );
};

export default MsgListSectionHeaderContainer;
