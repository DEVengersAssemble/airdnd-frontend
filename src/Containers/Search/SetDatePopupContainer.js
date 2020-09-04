import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetDatePopup } from '../../Components/Search/FilterPopup';
import { openHeader, closePopup } from '../../Modules/search';

const SetDatePopupContainer = () => {
  const { popupState } = useSelector(state => state.search);
  const popup = useRef();
  const dispatch = useDispatch();
  // const closePopup = ({ target }) => {
  //   if (!popupState || popup.current.contains(target)) return;
  //   onClose('price', true);
  // };

  const onClickBtn = () => {
    closePopup('price', true);
    dispatch(openHeader());
  };

  // useEffect(() => {
  //   document.addEventListener('click', closePopup);
  //   return () => {
  //     document.removeEventListener('click', closePopup);
  //   };
  // }, [closePopup]);

  return (
    // <div ref={popup}>
    <SetDatePopup popupState={popupState.price} onClickBtn={onClickBtn} />
    // </div>
  );
};

export default React.memo(SetDatePopupContainer);
