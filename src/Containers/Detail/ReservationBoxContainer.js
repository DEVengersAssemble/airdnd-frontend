import React, { useRef, useEffect } from 'react';
import { openModal } from '../../Modules/modal';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReservationBox from '../../Components/Detail/ReservationBox';
import {
  setCheckin,
  setCheckout,
  setResevationGuest,
} from '../../Modules/reservation';
import { setScrollLocationY } from '../../Modules/home';

const ReservationBoxContainer = ({ home }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  const {
    dateDiff: searchDateDiff,
    checkIn: searchCheckin,
    checkOut: searchCheckout,
  } = useSelector(state => state.searchForm);
  const {
    dateDiff,
    checkin,
    checkout,
    changeInitialDate,
    changeInitialGuests,
  } = useSelector(state => state.reservation);
  const searchGuests = useSelector(state => state.searchForm.guests);
  const reserveGuests = useSelector(state => state.reservation.guests);
  const { adult: searchAdult, child: searchChild } = searchGuests;
  const { adult: reserveAdult, child: reserveChild } = reserveGuests;
  const { id, price, reviews } = home;
  const { rating, count } = reviews;
  const history = useHistory();
  const dispatch = useDispatch();

  const reAssignedDateDiff = changeInitialDate ? dateDiff : searchDateDiff;
  const reAssignedCheckin = changeInitialDate ? checkin : searchCheckin;
  const reAssignedCheckout = changeInitialDate ? checkout : searchCheckout;
  const notChecked = !reAssignedCheckin || !reAssignedCheckout;

  const reAssignedAdult =
    (changeInitialGuests ? reserveAdult : searchAdult) || 1;
  const reAssignedChild = changeInitialGuests ? reserveChild : searchChild;

  const regExp = /\d/g;
  const removedCommaPrice = Number(price.match(regExp).join(''));

  const pricePerPerson =
    removedCommaPrice * (reAssignedAdult + reAssignedChild);

  const pricePerPersonToString = pricePerPerson.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const multipliedPrice = (pricePerPerson * reAssignedDateDiff).toLocaleString(
    undefined,
    {
      maximumFractionDigits: 0,
    },
  );

  const percentage = (
    ((pricePerPerson * reAssignedDateDiff) / 100) *
    12
  ).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const filteredPercentage = Number(percentage.match(regExp).join(''));

  const totalPrice = (
    pricePerPerson * reAssignedDateDiff +
    filteredPercentage
  ).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const checkPopupRef = useRef();

  const onGoToReservation = () => {
    if (notChecked) {
      checkPopupRef.current.click();
      return;
    }
    if (!isLoggedIn) {
      dispatch(openModal('login'));
      return;
    }
    if (!changeInitialDate) {
      dispatch(setCheckin(searchCheckin));
      dispatch(setCheckout(searchCheckout));
    }
    if (!changeInitialGuests) {
      const _searchGuests = { ...searchGuests, adult: reAssignedAdult || 1 };
      dispatch(setResevationGuest(_searchGuests));
    }
    history.push(`/Reservation/HouseRules/${id}`);
  };

  useEffect(() => {
    dispatch(setScrollLocationY('checkPopupRef', checkPopupRef.current));
  }, []);

  return (
    <ReservationBox
      checkPopupRef={checkPopupRef}
      price={pricePerPersonToString}
      multipliedPrice={multipliedPrice}
      percentage={percentage}
      totalPrice={totalPrice}
      // removedCommaPrice={removedCommaPrice}
      rating={rating}
      count={count}
      // getPercentage={getPercentage}
      // getTotalPrice={getTotalPrice}
      // getmultipliedPrice={getmultipliedPrice}
      dateDiff={reAssignedDateDiff}
      notChecked={notChecked}
      onGoToReservation={onGoToReservation}
    />
  );
};

export default ReservationBoxContainer;
