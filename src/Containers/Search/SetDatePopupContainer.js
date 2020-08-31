import React, { useEffect, useRef, useState } from 'react';
import { SetDatePopup } from '../../Components/Search/FilterPopup';

let prevFilter = {};

const SetDatePopupContainer = ({ popupState, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose('setDate');
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <SetDatePopup popupState={popupState} />
    </div>
  );
};

export default SetDatePopupContainer;
