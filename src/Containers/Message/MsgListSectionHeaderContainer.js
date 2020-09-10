import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionHeader from '../../Components/Message/MsgListSectionHeader';
import { openPopup, closePopup } from '../../Modules/message';

const MsgListSectionHeaderContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.message.messages);
  const dispatch = useDispatch();

  // ! hook
  const popupBtnRef = useRef();
  const popupRef = useRef();

  // ! variable
  const state = data && Object.keys(data)[0];
  const popupState = useSelector(state => state.message.popupState.filter);

  // ! event
  const onClickPopup = useCallback(() => {
    dispatch(openPopup('filter'));
  }, [openPopup]);

  // ! onClickOutside: close popup when clicking outside
  const onClickOutSide = useCallback(
    ({ target }) => {
      if (!popupBtnRef.current || popupBtnRef.current.contains(target))
        return null;
      if (!popupRef.current || popupRef.current.contains(target)) return null;
      return dispatch(closePopup('filter'));
    },
    [popupBtnRef, popupRef],
  );

  // ! effect
  useEffect(() => {
    // ! 렌더링 될때마다 effect 발생...
    // ! 하은이가 알려준 방법 적용하기
    document.addEventListener('click', onClickOutSide);
    return () => {
      document.removeEventListener('click', onClickOutSide);
    };
  }, [onClickOutSide]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;

  return (
    <MsgListSectionHeader
      state={state}
      onClickPopup={onClickPopup}
      popupState={popupState}
      popupBtnRef={popupBtnRef}
      popupRef={popupRef}
    />
  );
};

export default MsgListSectionHeaderContainer;
