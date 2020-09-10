import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionHeader from '../../Components/Message/MsgListSectionHeader';
import { useLocation } from 'react-router';
import qs from 'qs';
import { fetchInbox } from '../../Modules/message';

const MsgListSectionHeaderContainer = () => {
  // // ! redux
  // const { data, loading, error } = useSelector(state => state.message.message);
  // console.log(data);
  // const dispatch = useDispatch();

  // // ! hook
  // const [openPopup, setOpenPopup] = useState(false);
  // const popupBtnRef = useRef();
  // const popupRef = useRef();
  // const query = useLocation();
  // const filter = qs.parse(query.search, {
  //   ignoreQueryPrefix: true,
  // });

  // ! variable
  // const allState = filteredMsgs.map(msg => msg.state)[0];
  // const hideState = filteredMsgs.map(msg => msg.state)[0];
  // const unreadState = filteredMsgs.map(msg => msg.state)[0];

  // // ! event
  // const onClickPopup = useCallback(() => {
  //   setOpenPopup(!openPopup);
  // }, [openPopup, setOpenPopup]);

  // // ! onClickOutside: close popup when clicking outside
  // const onClickOutSide = useCallback(
  //   ({ target }) => {
  //     if (!popupBtnRef.current || popupBtnRef.current.contains(target))
  //       return null;
  //     if (!popupRef.current || popupRef.current.contains(target)) return null;
  //     return setOpenPopup(false);
  //   },
  //   [setOpenPopup, popupBtnRef, popupRef],
  // );

  // // ! effect
  // useEffect(() => {
  //   document.addEventListener('click', onClickOutSide);
  //   return () => {
  //     document.removeEventListener('click', onClickOutSide);
  //   };
  // }, [onClickOutSide]);

  // // ! effect
  // useEffect(() => {
  //   dispatch(fetchInbox(filter || 'all'));
  // }, [dispatch, filter]);

  // if (loading) return <div>로딩중</div>;
  // if (error) return <div>에러</div>;
  // if (!data) return null;

  return (
    <MsgListSectionHeader
    // allState={allState}
    // hideState={hideState}
    // unreadState={unreadState}
    // openPopup={openPopup}
    // setOpenPopup={setOpenPopup}
    // onClickPopup={onClickPopup}
    // popupBtnRef={popupBtnRef}
    // popupRef={popupRef}
    />
  );
};

export default MsgListSectionHeaderContainer;
