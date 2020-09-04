import React, { useEffect, useRef } from 'react';
import { RoomTypePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import {
  unsaveFilter,
  setFilter,
  resetFilter,
  closePopup,
} from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

const RoomTypePopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { roomTypeHouse, roomTypePrivate, roomTypeShared } = filterApplied;
  const isDisabled = !roomTypeHouse && !roomTypePrivate && !roomTypeShared;
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const onReset = () => dispatch(resetFilter('roomType'));
  const onSave = () => dispatch(closePopup());
  const onClose = () => dispatch(unsaveFilter());

  // const popup = useRef();
  // const closePopup = ({ target }) => {
  //   if (!popupState || popup.current.contains(target)) return;

  //   if (isDisabled) {
  //     const {
  //       roomTypeHouse,
  //       roomTypePrivate,
  //       roomTypeShared,
  //       ...newQueryObj
  //     } = queryObj;
  //     history.replace(`/search${qs.stringify(newQueryObj)}`);
  //   } else {
  //     const newQueryObj = {
  //       ...queryObj,
  //       roomTypeHouse,
  //       roomTypePrivate,
  //       roomTypeShared,
  //     };
  //     history.replace(`/search?${qs.stringify(newQueryObj)}`);
  //   }

  //   onClose('roomType', isDisabled);
  // };

  // useEffect(() => {
  //   document.addEventListener('click', closePopup);
  //   return () => {
  //     document.removeEventListener('click', closePopup);
  //   };
  // }, [closePopup]);

  return (
    // <div ref={popup}>
    <RoomTypePopup
      // check={roomType}
      popupState={popupState}
      isDisabled={isDisabled}
      onSave={onSave}
      // onChange={onChange}
      onReset={onReset}
    />
    // </div>
  );
};

export default React.memo(RoomTypePopupContainer);
