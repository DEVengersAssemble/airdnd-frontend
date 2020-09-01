import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSearchData } from '../../Modules/searchForm';
import ReservationBox from '../../Components/Detail/ReservationBox';

const ReservationBoxContainer = ({ home }) => {
  // const [popupState, SetPopupState] = useState(false);

  const searchData = useSelector(state => state.searchForm);
  const history = useHistory();
  // const popup = useRef();

  const getPercentage = price => {
    const regExp = /\d/g;
    const filteredNumber = price.match(regExp).join('');
    return ((filteredNumber / 100) * 12).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };
  const getTotalPrice = (price, percentage) => {
    const regExp = /\d/g;
    const filteredPrice = Number(price.match(regExp).join(''));
    const filteredPercentage = Number(percentage.match(regExp).join(''));
    return (filteredPrice + filteredPercentage).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  // const onClosePopup = ({ target }) => {
  //   if (
  //     (!popupState || popup.current.contains(target)) &&
  //     target.textContent !== '닫기'
  //   )
  //     return;
  //   SetPopupState(false);
  // };

  // const onOpenPopup = () => SetPopupState(true);

  // const changeSearchData = (name, value) => {
  //   const data = { name, value };
  //   dispatch(setSearchData(data));
  // };

  // const increaseGuestCount = (guestsData, guestType) => {
  //   let { adult, child, infant } = guestsData;
  //   if (guestType === 'adult' || !adult) adult++;
  //   if (guestType === 'child') {
  //     child++;
  //   } else if (guestType === 'infant') {
  //     infant++;
  //   }
  //   const value = { adult, child, infant };
  //   changeSearchData('guests', value);
  // };

  // const decreaseGuestCount = (guestsData, guestType) => {
  //   let { adult, child, infant } = guestsData;
  //   if (guestType === 'adult' && adult > 0) adult--;
  //   else if (guestType === 'child' && child > 0) child--;
  //   else if (guestType === 'infant' && infant > 0) infant--;
  //   const value = { adult, child, infant };
  //   changeSearchData('guests', value);
  // };

  // useEffect(() => {
  //   document.addEventListener('click', onClosePopup);
  //   return () => {
  //     document.removeEventListener('click', onClosePopup);
  //   };
  // }, [onClosePopup]);

  return (
    <ReservationBox
      home={home}
      getPercentage={getPercentage}
      getTotalPrice={getTotalPrice}
      // popup={popup}
      // onOpenPopup={onOpenPopup}
      // popupState={popupState}
      // onClosePopup={onClosePopup}
      history={history}
      searchData={searchData}
      // increaseGuestCount={increaseGuestCount}
      // decreaseGuestCount={decreaseGuestCount}
    />
  );
};

export default ReservationBoxContainer;
