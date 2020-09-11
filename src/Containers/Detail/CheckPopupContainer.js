import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import CheckPopup from '../../Components/Detail/CheckPopup';

const CheckPopupContainer = ({ checkPopupRef }) => {
  const {
    dateDiff: searchDateDiff,
    checkIn: searchCheckin,
    checkOut: searchCheckout,
  } = useSelector(state => state.searchForm);
  const { dateDiff, checkin, checkout, changeInitialDate } = useSelector(
    state => state.reservation,
  );

  const reAssignedDateDiff = changeInitialDate ? dateDiff : searchDateDiff;
  const reAssignedCheckin = changeInitialDate ? checkin : searchCheckin;
  const reAssignedCheckout = changeInitialDate ? checkout : searchCheckout;

  // const CheckPopupRef = useRef();
  const [popupState, setPopupState] = useState(false);

  const onOpenPopup = () => {
    console.log('click popup');
    setPopupState(true);
  };

  // const onClosePopup = ({ target }) => {
  //   console.log('close popup', target);
  //   // console.log(e.target.contains(popup.current));
  //   if (
  //     checkPopupRef.current.contains(target) ||
  //     target.textContent === '예약 가능 여부 보기' ||
  //     target.textContent === '닫기'
  //   )
  //     return;
  //   setPopupState(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('click', onClosePopup);
  //   return () => {
  //     window.removeEventListener('click', onClosePopup);
  //   };
  // }, []);

  // useEffect(() => {
  //   setPopupState(false);
  // }, [reAssignedDateDiff]);

  return (
    <CheckPopup
      checkPopupRef={checkPopupRef}
      checkin={reAssignedCheckin}
      checkout={reAssignedCheckout}
      dateDiff={reAssignedDateDiff}
      setPopupState={setPopupState}
      popupState={popupState}
      onOpenPopup={onOpenPopup}
    />
  );
};

export default CheckPopupContainer;
