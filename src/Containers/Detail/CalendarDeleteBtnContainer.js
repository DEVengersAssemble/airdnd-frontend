import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalendarDeleteBtn from '../../Components/Detail/CalendarDeleteBtn';
import {
  deleteCheckInOut,
  setChangeInitialDate,
} from '../../Modules/reservation';

const CalendarDeleteBtnContainer = () => {
  const { changeInitialDate, checkin, checkout } = useSelector(
    state => state.reservation,
  );
  const dispatch = useDispatch();

  const onClick = () => {
    if (checkin || checkout) dispatch(deleteCheckInOut());
    if (changeInitialDate === false) dispatch(setChangeInitialDate());
  };

  return <CalendarDeleteBtn onClick={onClick} />;
};

export default CalendarDeleteBtnContainer;
