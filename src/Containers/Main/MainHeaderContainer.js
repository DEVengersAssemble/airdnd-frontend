import React, { useState, useEffect } from 'react';
import MainHeader from '../../Components/Main/MainHeader';

const MainHeaderContainer = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  console.log('isScrollTop', isScrollTop);

  const onScroll = e => {
    console.log(window.scrollY);
    console.log(e);
    setIsScrollTop(e && window.scrollY < 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const handleClick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
  };
  return (
    <MainHeader
      isScrollTop={isScrollTop}
      handleClick={handleClick}
    ></MainHeader>
  );
};

export default MainHeaderContainer;
