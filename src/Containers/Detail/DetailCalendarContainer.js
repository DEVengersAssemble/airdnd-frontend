import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalendarContainer from '../Global/CalendarContainer';
import {
  setCheckin,
  setCheckout,
  setChangeInitialDate,
} from '../../Modules/reservation';

const DetailCalendarContainer = ({ ...rest }) => {
  const { isScreenLarge } = useSelector(state => state.home.screenState);
  const { checkin, checkout, changeInitialDate, reservedDates } = useSelector(
    state => state.reservation,
  );
  const { checkIn, checkOut } = useSelector(state => state.searchForm);

  const dispatch = useDispatch();

  const confirmCheckin = changeInitialDate ? checkin : checkIn;
  const confirmCheckout = changeInitialDate ? checkout : checkOut;

  const setCheckinData = checkin => dispatch(setCheckin(checkin));
  const setCheckoutData = checkout => dispatch(setCheckout(checkout));
  const setChangeDataTrue = () => dispatch(setChangeInitialDate());

  return (
    <CalendarContainer
      responsiveScreen={isScreenLarge}
      setCheckinData={setCheckinData}
      setCheckoutData={setCheckoutData}
      checkin={confirmCheckin}
      checkout={confirmCheckout}
      changeInitialDate={changeInitialDate}
      setChangeDataTrue={setChangeDataTrue}
      reservedDates={reservedDates}
      isDetailPage={true}
      {...rest}
    />
  );
};

export default DetailCalendarContainer;
