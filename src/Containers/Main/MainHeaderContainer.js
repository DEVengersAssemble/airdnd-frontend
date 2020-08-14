import React, { useState } from 'react';
import MainHeader from '../../Components/Main/MainHeader';

const MainHeaderContainer = () => {
  const [isScrollTop, setIsScrollTop] = useState(false);
  return <MainHeader isScrollTop={isScrollTop}></MainHeader>;
};

export default MainHeaderContainer;
