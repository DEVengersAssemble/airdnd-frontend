import React, { useState } from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = ({ home, openListModal }) => {
  return <Home home={home} openListModal={openListModal} />;
};

export default HomeContainer;
