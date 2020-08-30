import React from 'react';
import { useHistory } from 'react-router-dom';
import TripsHeader from '../../Components/Trips/TripsHeader';

const TripsHeaderContainer = () => {
  const history = useHistory();

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  return <TripsHeader handleLogoClick={handleLogoClick}></TripsHeader>;
};

export default TripsHeaderContainer;
