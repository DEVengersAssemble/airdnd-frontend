import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQuery } from '../../Modules/search';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';

const SearchContentContainer = () => {
  const query = useLocation();
  const searchForm = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuery(searchForm));
  }, []);

  return <SearchContent />;
};

export default SearchContentContainer;
