import React, { useEffect, useRef } from 'react';
import { SetDatePopup } from '../../Components/Search/FilterPopup';

// let prevFilter = {};

const SetDatePopupContainer = ({ popupState, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose('price');
  };

  const onClickBtn = () => {
    onClose('price');
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  console.log(popupState, '열렷니 닫혓니');

  return (
    <div ref={popup}>
      <SetDatePopup popupState={popupState} onClickBtn={onClickBtn} />
    </div>
  );
};

export default React.memo(SetDatePopupContainer);
