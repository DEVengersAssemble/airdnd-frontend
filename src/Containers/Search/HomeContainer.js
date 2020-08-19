import React, { useState } from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = ({ key, home }) => {
  return <Home key={key} home={home} />;
};

export default HomeContainer;
