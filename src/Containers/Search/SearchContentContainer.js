import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getData } from '../../Modules/search';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';

const SearchContentContainer = () => {
  const dispatch = useDispatch();
  const query = useLocation();
  const searchForm = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    dispatch(getData(searchForm));
  }, []);

  return <SearchContent />;
};

export default SearchContentContainer;
