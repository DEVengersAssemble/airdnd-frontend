import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import GuestInfo from '../../Components/Reservation/GuestInfo';

const GuestInfoContainer = () => {
  const { id, hostFirstName, profileImg, isSupperhost } = useSelector(
    state => ({
      id: state.home.homeState.home.id,
      hostFirstName: state.home.homeState.home.host.hostFirstName,
      profileImg: state.home.homeState.home.host.profileImg,
      isSupperhost: state.home.homeState.home.host.isSupperhost,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(!toggle);
  const onNextPage = () => history.push(`/Reservation/Payment/${id}`);

  const onBlur = e => {
    // return e.target.textContent ?
  };

  return (
    <GuestInfo
      hostFirstName={hostFirstName}
      profileImg={profileImg}
      isSupperhost={isSupperhost}
      onNextPage={onNextPage}
      onBlur={onBlur}
      onToggle={onToggle}
      toggle={toggle}
    />
  );
};

export default GuestInfoContainer;
