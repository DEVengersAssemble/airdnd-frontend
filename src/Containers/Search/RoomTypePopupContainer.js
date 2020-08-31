import React, { useEffect, useRef } from 'react';
import { RoomTypePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveFilter,
  setFilter,
  resetFilter,
  checkDisabled,
} from '../../Modules/search';

let prevFilter = {};

const RoomTypePopupContainer = ({ popupState, onClose }) => {
  const { roomType } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();
  const isDisabled =
    roomType && !roomType.house && !roomType.private && !roomType.shared;

  const onChange = type =>
    dispatch(setFilter('roomType', { ...roomType, [type]: !roomType[type] }));
  const onReset = () => dispatch(resetFilter('roomType'));
  const onSave = () => dispatch(saveFilter('roomType', roomType, isDisabled));

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    // dispatch(saveFilter('roomType'), prevFilter);
    onClose('roomType');
  };

  useEffect(() => {
    prevFilter = { ...roomType };
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RoomTypePopup
        check={roomType}
        popupState={popupState}
        isDisabled={isDisabled}
        onSave={onSave}
        onChange={onChange}
        onReset={onReset}
      />
    </div>
  );
};

export default RoomTypePopupContainer;
