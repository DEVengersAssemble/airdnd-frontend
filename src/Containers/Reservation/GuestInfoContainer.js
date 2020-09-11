import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import GuestInfo from '../../Components/Reservation/GuestInfo';
import {
  setToHostMessage,
  setChangeInitialMessage,
} from '../../Modules/reservation';

const payload = {
  homeId: 1,
  checkin: '2020.09.22',
  checkout: '2020.09.25',
  adult: 1,
  child: 0,
  infant: 0,
  toHostMessage: '',
};

const GuestInfoContainer = () => {
  const {
    id,
    hostFirstName,
    profileImg,
    isSupperhost,
    toHostMessage,
    changeInitialMessage,
  } = useSelector(
    state => ({
      id: state.home.homeState.home.id,
      hostFirstName: state.home.homeState.home.host.hostFirstName,
      profileImg: state.home.homeState.home.host.profileImg,
      isSupperhost: state.home.homeState.home.host.isSupperhost,
      toHostMessage: state.reservation.toHostMessage,
      changeInitialMessage: state.reservation.changeInitialMessage,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(!toggle);
  const onNextPage = () => {
    if (!changeInitialMessage) dispatch(setChangeInitialMessage());
    if (!toHostMessage) return;
    history.push(`/Reservation/Payment/${id}`);
  };

  const onSetMessage = ({ target }) => {
    if (!changeInitialMessage) dispatch(setChangeInitialMessage());
    dispatch(setToHostMessage(target.value));
  };

  return (
    <GuestInfo
      hostFirstName={hostFirstName}
      profileImg={profileImg}
      isSupperhost={isSupperhost}
      onNextPage={onNextPage}
      onSetMessage={onSetMessage}
      onToggle={onToggle}
      toggle={toggle}
      toHostMessage={toHostMessage}
      blankMessage={changeInitialMessage && !toHostMessage}
    />
  );
};

export default GuestInfoContainer;
