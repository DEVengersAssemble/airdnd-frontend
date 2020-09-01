import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import MainHeader from '../../Components/Main/MainHeader';

const MainHeaderContainer = () => {
  const [isScrollTop, setIsScrollTop] = useState(window.scrollY === 0);
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);

  const onScroll = e => {
    console.log('[onScroll]: ', window.scrollY);
    setIsScrollTop(e && window.scrollY < 20);
    setIsSearchBtnClicked(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(onScroll, 150));
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLogoClick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(true);
  };
  return (
    <MainHeader
      isScrollTop={isScrollTop}
      isSearchBtnClicked={isSearchBtnClicked}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
    ></MainHeader>
  );
};

export default MainHeaderContainer;
