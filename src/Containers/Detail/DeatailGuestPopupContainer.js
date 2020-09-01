import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchData } from '../../Modules/searchForm';
import DetailGuestPopup from '../../Components/Detail/DetailGuestPopup';

const DeatailGuestPopupContainer = () => {
  const { guests } = useSelector(state => state.searchForm);
  const dispatch = useDispatch();
  const [popupState, SetPopupState] = useState(false);
  const popup = useRef();

  const changeSearchData = (name, value) => {
    const data = { name, value };
    dispatch(setSearchData(data));
  };

  const increaseGuestCount = (guestsData, guestType) => {
    let { adult, child, infant } = guestsData;
    if (guestType === 'adult' || !adult) adult++;
    if (guestType === 'child') {
      child++;
    } else if (guestType === 'infant') {
      infant++;
    }
    const value = { adult, child, infant };
    changeSearchData('guests', value);
  };

  const decreaseGuestCount = (guestsData, guestType) => {
    let { adult, child, infant } = guestsData;
    if (guestType === 'adult' && adult > 0) adult--;
    else if (guestType === 'child' && child > 0) child--;
    else if (guestType === 'infant' && infant > 0) infant--;
    const value = { adult, child, infant };
    changeSearchData('guests', value);
  };

  const onClosePopup = ({ target }) => {
    if (
      (!popupState || popup.current.contains(target)) &&
      target.textContent !== '닫기'
    )
      return;
    SetPopupState(false);
  };

  useEffect(() => {
    document.addEventListener('click', onClosePopup);
    return () => {
      document.removeEventListener('click', onClosePopup);
    };
  }, [onClosePopup]);

  const onOpenPopup = () => SetPopupState(true);

  return (
    <DetailGuestPopup
      guests={guests}
      popup={popup}
      onOpenPopup={onOpenPopup}
      popupState={popupState}
      onClosePopup={onClosePopup}
      increaseGuestCount={increaseGuestCount}
      decreaseGuestCount={decreaseGuestCount}
    />
  );
};

export default DeatailGuestPopupContainer;
