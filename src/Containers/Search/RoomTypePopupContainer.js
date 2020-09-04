import React, { useEffect, useRef } from 'react';
import { RoomTypePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, setFilter, resetFilter } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

const RoomTypePopupContainer = ({ popupState, onClose }) => {
  const { roomType } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

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
      check={roomType}
      popupState={popupState}
      // isDisabled={isDisabled}
      // onSave={onSave}
      // onChange={onChange}
      // onReset={onReset}
    />
    // </div>
  );
};

export default React.memo(RoomTypePopupContainer);
