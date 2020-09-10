import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setResevationGuest,
  setChangeInitialGuests,
} from '../../Modules/reservation';
import DetailGuestPopup from '../../Components/Detail/DetailGuestPopup';

const DeatailGuestPopupContainer = ({ displayName, ...rest }) => {
  const {
    adult: searchAdult,
    child: searchChild,
    infant: searchInfant,
  } = useSelector(state => state.searchForm.guests);
  const {
    adult: reserveAdult,
    child: reserveChild,
    infant: reserveInfant,
  } = useSelector(state => state.reservation.guests);
  const { changeInitialGuests } = useSelector(state => state.reservation);
  const { capacity } = useSelector(state => state.home.homeState.home);
  const dispatch = useDispatch();
  const [popupState, SetPopupState] = useState(false);
  const popup = useRef();

  const newAdult = (changeInitialGuests ? reserveAdult : searchAdult) || 1;
  const newChild = changeInitialGuests ? reserveChild : searchChild;
  const newInfant = changeInitialGuests ? reserveInfant : searchInfant;

  const changeGuestData = (adult, child, infant) => {
    const data = { adult, child, infant };
    dispatch(setResevationGuest(data));
    if (!changeInitialGuests) dispatch(setChangeInitialGuests());
  };

  const isFullCapacity = newAdult + newChild >= capacity;

  const increaseGuestCount = guestType => {
    if ((guestType === 'adult' || !newAdult) && !isFullCapacity) {
      changeGuestData(newAdult + 1, newChild, newInfant);
    } else if (guestType === 'child' && !isFullCapacity) {
      changeGuestData(newAdult, newChild + 1, newInfant);
    } else if (guestType === 'infant' && newInfant < 5) {
      changeGuestData(newAdult, newChild, newInfant + 1);
    }
  };

  const decreaseGuestCount = guestType => {
    if (guestType === 'adult' && newAdult > 1) {
      changeGuestData(newAdult - 1, newChild, newInfant);
    } else if (guestType === 'child' && newChild > 0) {
      changeGuestData(newAdult, newChild - 1, newInfant);
    } else if (guestType === 'infant' && newInfant > 0) {
      changeGuestData(newAdult, newChild, newInfant - 1);
    }
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
      adult={newAdult}
      child={newChild}
      infant={newInfant}
      popup={popup}
      onOpenPopup={onOpenPopup}
      popupState={popupState}
      onClosePopup={onClosePopup}
      increaseGuestCount={increaseGuestCount}
      decreaseGuestCount={decreaseGuestCount}
      capacity={capacity}
      isFullCapacity={isFullCapacity}
      displayName={displayName}
      {...rest}
    />
  );
};

export default DeatailGuestPopupContainer;
