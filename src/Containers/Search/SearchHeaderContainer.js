import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SearchHeader from '../../Components/Search/SearchHeader';
import qs from 'qs';

const SearchHeaderContainer = () => {
  const history = useHistory();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });
  const {
    location,
    checkIn,
    checkOut,
    dateDiff,
    flexibleDate,
    adult,
    child,
    infant,
  } = queryObj;
  const searchFormObj = {
    location,
    checkIn,
    checkOut,
    dateDiff,
    flexibleDate,
    guests: {
      adult,
      child,
      infant,
    },
  };
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [initAnimation, setInitAnimation] = useState(false);
  const searchForm = searchFormObj;

  const onScroll = () => {
    setIsSearchBtnClicked(false);
  };

  useEffect(() => {
    if (!initAnimation && isSearchBtnClicked) {
      setInitAnimation(true);
    }
    window.addEventListener('scroll', throttle(onScroll, 150));
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, initAnimation]);

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(true);
  };
  return (
    <SearchHeader
      initAnimation={initAnimation}
      isSearchBtnClicked={isSearchBtnClicked}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
      searchForm={searchForm}
    ></SearchHeader>
  );
};

export default React.memo(SearchHeaderContainer);
