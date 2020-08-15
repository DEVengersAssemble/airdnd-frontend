import React, { useState } from 'react';
import MainHeader from '../../Components/Main/MainHeader';

const MainHeaderContainer = () => {
  const [isScrollTop, setIsScrollTop] = useState(false);
  const handleClick = () => {
    setIsScrollTop(!isScrollTop);
  };
  return (
    <MainHeader
      isScrollTop={isScrollTop}
      handleClick={handleClick}
    ></MainHeader>
  );
};

export default MainHeaderContainer;
