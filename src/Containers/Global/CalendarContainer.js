import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from '../../Components/Global/Calendar';

const CalendarContainer = () => {
  const { isScreenLarge } = useSelector(state => state.home.screenState);
  const dispatch = useDispatch();

  return <Calendar isScreenLarge={isScreenLarge} />;
};

export default CalendarContainer;
