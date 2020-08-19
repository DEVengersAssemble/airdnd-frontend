import React, { useState } from 'react';
import Home from '../../Components/Search/Home';

<<<<<<< HEAD
const HomeContainer = ({ key, home }) => {
  return <Home key={key} home={home} />;
=======
const HomeContainer = ({ home, openListModal }) => {
  return <Home home={home} openListModal={openListModal} />;
>>>>>>> 6a1609d90b758efe188037199a8a2f0f4c5fb230
};

export default HomeContainer;
