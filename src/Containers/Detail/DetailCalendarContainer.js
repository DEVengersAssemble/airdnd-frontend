import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalendarContainer from '../Global/CalendarContainer';
import { setCheckin, setCheckout } from '../../Modules/reservation';

const DetailCalendarContainer = () => {
  const { isScreenLarge } = useSelector(state => state.home.screenState);
  const { checkin, checkout } = useSelector(state => state.reservation);
  const dispatch = useDispatch();

  const setCheckinData = checkin => dispatch(setCheckin(checkin));
  const setCheckoutData = checkout => dispatch(setCheckout(checkout));

  return (
    <CalendarContainer
      responsiveScreen={isScreenLarge}
      setCheckinData={setCheckinData}
      setCheckoutData={setCheckoutData}
      checkin={checkin}
      checkout={checkout}
    />
  );
};

export default DetailCalendarContainer;
