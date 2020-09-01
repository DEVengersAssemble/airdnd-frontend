import React, { useEffect } from 'react';
import ReservationSubRouter from '../../Routers/ReservationSubRouter';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getHome } from '../../Modules/home';

const ReservationMainContainer = () => {
  const dispatch = useDispatch();
  const { home } = useSelector(state => state.home.homeState);

  const { pathname } = useLocation();
  const regExp = /\d/g;
  const filteredHomeId = (pathname.match(regExp) || []).join('');

  useEffect(() => {
    if (home) return;
    dispatch(getHome(filteredHomeId));
  }, []);

  if (!home) return <div style={{ padding: '300px 0' }} />;

  return <ReservationSubRouter />;
};

export default ReservationMainContainer;
