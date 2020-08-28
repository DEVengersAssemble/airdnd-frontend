import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchHeader from '../../Components/Search/SearchHeader';

const SearchHeaderContainer = () => {
  const history = useHistory();
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const searchForm = useSelector(state => state.searchForm);
  console.log('searchForm: ', searchForm);
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
    <SearchHeader
      isSearchBtnClicked={isSearchBtnClicked}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
      searchForm={searchForm}
    ></SearchHeader>
  );
};

export default SearchHeaderContainer;
