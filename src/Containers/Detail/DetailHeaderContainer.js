import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DetailHeader from '../../Components/Detail/DetailHeader';

const DetailHeaderContainer = () => {
  const history = useHistory();
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const searchForm = useSelector(state => state.searchForm);
  const onScroll = () => {
    setIsSearchBtnClicked(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(true);
  };

  return (
    <DetailHeader
      isSearchBtnClicked={isSearchBtnClicked}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
      searchForm={searchForm}
    ></DetailHeader>
  );
};

export default DetailHeaderContainer;
