import React, { useEffect } from 'react';
import ReservationSubRouter from '../../Routers/ReservationSubRouter';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getHome } from '../../Modules/home';
import { openModal } from '../../Modules/modal';
import LoginModalContainer from '../Main/LoginModalContainer';
import ReservationNotLogIn from '../../Components/Reservation/ReservationNotLogIn';

const ReservationMainContainer = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { home } = useSelector(state => state.home.homeState);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const regExp = /\d/g;
  const filteredHomeId = (pathname.match(regExp) || []).join('');

  useEffect(() => {
    if (home) return;
    dispatch(getHome(filteredHomeId));
  }, []);

  const onClick = () => dispatch(openModal('login'));

  if (isLoggedIn) {
    dispatch(openModal('login'));
    return (
      <>
        <ReservationNotLogIn onClick={onClick} />
        <LoginModalContainer />
      </>
    );
  }
  if (!home) return <div style={{ padding: '300px 0' }} />;

  return <ReservationSubRouter />;
};

export default ReservationMainContainer;
