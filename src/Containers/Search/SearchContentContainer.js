import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../Modules/search';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';

const SearchContentContainer = () => {
  const dispatch = useDispatch();
  const query = useLocation();
  const searchForm = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    dispatch(fetchData(searchForm));
  }, []);

  return <SearchContent />;
};

export default SearchContentContainer;
