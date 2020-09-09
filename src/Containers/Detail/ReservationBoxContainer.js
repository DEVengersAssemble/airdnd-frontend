import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReservationBox from '../../Components/Detail/ReservationBox';

const ReservationBoxContainer = ({ home }) => {
  const searchData = useSelector(state => state.searchForm);
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
  const { adult: searchAdult, child: searchChild } = useSelector(
    state => state.searchForm.guests,
  );
  const { adult: reserveAdult, child: reserveChild } = useSelector(
    state => state.reservation.guests,
  );
  const { id, price, reviews } = home;
  const { rating, count } = reviews;
  const history = useHistory();

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

  // const multipliedPrice = getmultipliedPrice(
  //   pricePerPerson,
  //   reAssignedDateDiff,
  // );
  // const percentage = getPercentage(pricePerPerson * reAssignedDateDiff);
  // const totalPrice = getTotalPrice(
  //   pricePerPerson * reAssignedDateDiff,
  //   percentage,
  // );

  const checkPopupRef = useRef();

  const onGoToReservation = () => {
    if (notChecked) {
      checkPopupRef.current.click();
      console.log('test', checkPopupRef.current);
      return;
    }
    history.push(`/Reservation/HouseRules/${id}`);
  };

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
      searchData={searchData}
      dateDiff={reAssignedDateDiff}
      notChecked={notChecked}
      onGoToReservation={onGoToReservation}
    />
  );
};

export default ReservationBoxContainer;
