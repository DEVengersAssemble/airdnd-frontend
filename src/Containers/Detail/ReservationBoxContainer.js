import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReservationBox from '../../Components/Detail/ReservationBox';

const ReservationBoxContainer = ({ home }) => {
  const searchData = useSelector(state => state.searchForm);
  const {
    checkIn: searchCheckin,
    checkOut: searchCheckout,
    dateDiff: searchDateDiff,
  } = useSelector(state => state.searchForm);
  const { checkin, checkout, dateDiff, changeInitialDate } = useSelector(
    state => state.reservation,
  );
  const { price, reviews } = home;
  const { rating, count } = reviews;
  const history = useHistory();

  const reAssignedCheckin = changeInitialDate ? checkin : searchCheckin;
  const reAssignedCheckout = changeInitialDate ? checkout : searchCheckout;
  const reAssignedDateDiff = changeInitialDate ? dateDiff : searchDateDiff;

  const regExp = /\d/g;
  const removedCommaPrice = Number(price.match(regExp).join(''));

  const getPercentage = price => {
    return ((price / 100) * 12).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  const getTotalPrice = (price, percentage) => {
    const filteredPercentage = Number(percentage.match(regExp).join(''));
    return (price + filteredPercentage).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  const getmultipliedPrice = (price, dateDiff) => {
    return (price * dateDiff).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  return (
    <ReservationBox
      price={price}
      removedCommaPrice={removedCommaPrice}
      rating={rating}
      count={count}
      getPercentage={getPercentage}
      getTotalPrice={getTotalPrice}
      getmultipliedPrice={getmultipliedPrice}
      history={history}
      searchData={searchData}
      dateDiff={reAssignedDateDiff}
      checkin={reAssignedCheckin}
      checkout={reAssignedCheckout}
    />
  );
};

export default ReservationBoxContainer;
