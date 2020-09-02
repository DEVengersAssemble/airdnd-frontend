import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SetDatePopup } from '../../Components/Search/FilterPopup';
import { openHeader } from '../../Modules/search';

const SetDatePopupContainer = ({ popupState, onClose }) => {
  const popup = useRef();
  const dispatch = useDispatch();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose('price', true);
  };

  const onClickBtn = () => {
    onClose('price', true);
    dispatch(openHeader());
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <SetDatePopup popupState={popupState} onClickBtn={onClickBtn} />
    </div>
  );
};

export default React.memo(SetDatePopupContainer);
