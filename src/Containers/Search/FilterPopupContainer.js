import React, { useEffect, useRef } from 'react';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from '../../Components/Search/FilterPopup';

const RefundPopupContainer = ({ popupState, size, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (popupState && !popup.current.contains(target)) return;
    onClose();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RefundPopup
        popupState={popupState}
        popup={popup}
        onClose={onClose}
        size={size}
      />
    </div>
  );
};

const RoomTypePopupContainer = ({ popupState, size, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) onClose();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RoomTypePopup
        popupState={popupState}
        popup={popup}
        onClose={onClose}
        size={size}
      />
    </div>
  );
};

const PricePopupContainer = ({ popupState, size, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) onClose();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <PricePopup
        popupState={popupState}
        popup={popup}
        onClose={onClose}
        size={size}
      />
    </div>
  );
};

const SetDatePopupContainer = ({ popupState, size, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) onClose();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <SetDatePopup
        popupState={popupState}
        popup={popup}
        onClose={onClose}
        size={size}
      />
    </div>
  );
};

export {
  RefundPopupContainer,
  RoomTypePopupContainer,
  PricePopupContainer,
  SetDatePopupContainer,
};
