import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchHeader from '../../Components/Search/SearchHeader';

const SearchHeaderContainer = () => {
  const history = useHistory();
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [initAnimation, setInitAnimation] = useState(false);
  const searchForm = useSelector(state => state.searchForm);
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
