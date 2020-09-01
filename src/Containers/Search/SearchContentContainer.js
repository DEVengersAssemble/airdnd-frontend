import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';

const SearchContentContainer = () => {
  const query = useLocation();
  const { location, checkIn, checkOut } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  return <SearchContent />;
};

export default SearchContentContainer;
