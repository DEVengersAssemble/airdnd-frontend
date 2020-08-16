import React, { useState, useEffect } from 'react';
import MainHeader from '../../Components/Main/MainHeader';

const MainHeaderContainer = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  console.log('isScrollTop', isScrollTop);
  console.log('isSearchBtnClicked', isSearchBtnClicked);

  const onScroll = e => {
    console.log(window.scrollY);
    setIsScrollTop(e && window.scrollY < 20);
    setIsSearchBtnClicked(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const handleLogoClick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
  };

  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(true);
  };
  return (
    <MainHeader
      isScrollTop={isScrollTop}
      isSearchBtnClicked={isSearchBtnClicked}
      handleClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
    ></MainHeader>
  );
};

export default MainHeaderContainer;
