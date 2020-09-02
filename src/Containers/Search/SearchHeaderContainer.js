import React, { useEffect } from 'react';
import { throttle } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SearchHeader from '../../Components/Search/SearchHeader';
import { closeHeader, openHeader } from '../../Modules/search';
import qs from 'qs';

const SearchHeaderContainer = () => {
  const { headerState } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useLocation();
  const onScroll = () => dispatch(closeHeader());
  const searchForm = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    window.addEventListener('scroll', throttle(onScroll, 150));
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  const handleSearchBtnClick = () => dispatch(openHeader());

  return (
    <SearchHeader
      headerState={headerState}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
      searchForm={searchForm}
    ></SearchHeader>
  );
};

export default React.memo(SearchHeaderContainer);
