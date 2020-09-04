import React, { useEffect, useRef } from 'react';
import { RoomTypePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, setFilter, resetFilter } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import { updateQuery } from '../../lib/searchUtils';

// let prevFilter = {};

const RoomTypePopupContainer = ({ popupState, onClose }) => {
  const { roomType } = useSelector(state => state.search.filterApplied);
  const isDisabled =
    roomType && !roomType.house && !roomType.private && !roomType.shared;
  const history = useHistory();
  const { search: query } = useLocation();
  const filterQuery = '&refund?1';
  const dispatch = useDispatch();
  const onChange = type =>
    dispatch(setFilter('roomType', { ...roomType, [type]: !roomType[type] }));
  const onReset = () => dispatch(resetFilter('roomType'));
  const onSave = () => dispatch(saveFilter('roomType', roomType, isDisabled));

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    // dispatch(saveFilter('roomType'), prevFilter);
    onClose('roomType', isDisabled);
  };

  useEffect(() => {
    // prevFilter = { ...roomType };
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

export default React.memo(RoomTypePopupContainer);
